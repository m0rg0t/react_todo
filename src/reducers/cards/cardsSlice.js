import {createSlice} from '@reduxjs/toolkit';
import { removeCardById } from "../groups/groupsSlice";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {},
    reducers: {
        add: (state, action) => {
            state[action.payload.id] = action.payload;
        },
        remove: (state, action) => {
            if (state[action.payload]) {
                delete state[action.payload];
            }
        },
        update: (state, action) => {
            if (state[action.payload.id]) {
                state[action.payload.id] = action.payload;
            }
        },
        removeByIds: (state, action) => {
            action.payload.map(cardId => {
                state[cardId] && delete state[cardId];
            })
        }
    },
});

export const removeCardInGroups = (cardId) => (dispatch, getState) => {
    const {groups} = getState();
    Object.keys(groups).map(groupId => {
        dispatch(removeCardById({groupId, cardId}));
    });
}

export const {add, remove, update, removeByIds} = cardsSlice.actions;

export default cardsSlice.reducer;
