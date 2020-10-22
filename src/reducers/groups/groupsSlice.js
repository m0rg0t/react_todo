import {createSlice} from '@reduxjs/toolkit';
import GroupModel from "../../models/GroupModel";
import {
    add as addNewCard, removeByIds as removeCardsByIds
} from 'reducers/cards/cardsSlice';

export const groupsSlice = createSlice({
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
        },
        removeCardById: (state, action) => {
            let currentGroup = state[action.payload.groupId];
            if (currentGroup) {
                state[action.payload.groupId].cards = currentGroup.cards.filter(id => id !== action.payload.cardId);
            }
        }
    },
});

export const {add, remove, update, addCardById, removeCardById} = groupsSlice.actions;

export const moveFromGroup = (fromGroup, toGroup, cardId) => dispatch => {
    dispatch(addCardById({groupId: toGroup, cardId: cardId}));
    dispatch(removeCardById({groupId: fromGroup, cardId: cardId}));
}

export const addDefaultCard = (state) => dispatch => {
    const count = (Object.keys(state.groups).length + 1);
    dispatch(add(
        (new GroupModel(`Group${count}`)).toJSON()
    ));
};

export const deleteGroupAndCards = (group) => dispatch => {
    dispatch(remove(group.id));
    dispatch(removeCardsByIds(group.cards));
};

export const addCard = (groupId, card) => dispatch => {
    dispatch(addNewCard(card));
    dispatch(addCardById({groupId: groupId, cardId: card.id}));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default groupsSlice.reducer;
