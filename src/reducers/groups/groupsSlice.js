import { createSlice } from '@reduxjs/toolkit';
import GroupModel from 'models/GroupModel';
import {
    add as addNewCard
} from 'reducers/cards/cardsSlice';

const getModelData = (payload) => {
    let payloadData = payload;
    if (payload instanceof GroupModel) {
        payloadData = payload.toJSON();
    }
    return payloadData;
}

export const cardsSlice = createSlice({
    name: 'groups',
    initialState: {
    },
    reducers: {
        add: (state, action) => {
            state[action.payload.id] = getModelData(action.payload);
        },
        remove: (state, action) => {
            if (state[action.payload.id]) {
                delete state[action.payload.id]; 
            }
        },
        update: (state, action) => {
            if (state[action.payload.id]) {
                state[action.payload.id] = getModelData(action.payload);
            }
        },
        addCardById: (state, action) => {
            let currentGroup = state[action.payload.groupId];
            debugger;
            if (currentGroup && !currentGroup.cards.find(id => id === action.payload.cardId)) {
                currentGroup.cards.push(action.payload.cardId);
                state[action.payload.groupId] = currentGroup;
            }
        }
    },
});

export const addCard = (groupId, card) => dispatch => {
    dispatch(addNewCard(card));
    dispatch(addCardById({groupId: groupId, cardId: card.id }));
};

export const { add, remove, update, addCardById } = cardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAllGroups = state => state.groups;

export default cardsSlice.reducer;
