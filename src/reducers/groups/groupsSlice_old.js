import { createSlice } from '@reduxjs/toolkit';
import GroupModel from 'models/GroupModel';
import {
    add as addNewCard, removeByIds as removeCardsByIds
} from 'reducers/cards/cardsSlice';
import store from "../../app/store";

/*const getModelData = (payload) => {
    let payloadData = payload;
    if (payload instanceof GroupModel) {
        payloadData = payload.toJSON();
    }
    return payloadData;
}*/

export const groupsSlice_old = createSlice({
    name: 'groups',
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
        addCardById: (state, action) => {
            let currentGroup = state[action.payload.groupId];
            if (currentGroup && !currentGroup.cards.find(id => id === action.payload.cardId)) {
                currentGroup.cards.push(action.payload.cardId);
                state[action.payload.groupId] = currentGroup;
            }
        }
    }
});

export const addDefaultCard = () => dispatch => {
    console.log("store.getState()", store.getState());
    const groupCount = Object.keys(store.getState().groups).length + 1;

    dispatch(add(
        (new GroupModel(`Group${groupCount}`)).toJSON()
    ));
};

export const deleteGroupAndCards = (group) => dispatch => {
    dispatch(remove(group.id));
    dispatch(removeCardsByIds(group.cards));
};

export const addCard = (groupId, card) => dispatch => {
    dispatch(addNewCard(card));
    dispatch(addCardById({groupId: groupId, cardId: card.id }));
};

export const { add, remove, update, addCardById } = groupsSlice_old.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAllGroups = state => state.groups;

export default groupsSlice_old.reducer;
