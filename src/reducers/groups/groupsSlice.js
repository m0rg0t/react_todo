import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'groups',
    initialState: {
    },
    reducers: {
        add: (state, action) => {
            state[action.payload.id] = action.payload;
        },
        remove: (state, action) => {
            if (state[action.payload.id]) {
                delete state[action.payload.id]; 
            }
        },
        update: (state, action) => {
            if (state[action.payload.id]) {
                state[action.payload.id] = action.payload;
            }
        },
        addCard: (state, action) => {
            const currentGroup = state[action.payload.id];
            if (currentGroup && !currentGroup.cards.find(id => id === action.payload.cardId)) {
                currentGroup.cards.push(action.payload.cardId);
            }
        }
    },
});

export const { add, remove, update, addCard } = cardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default cardsSlice.reducer;
