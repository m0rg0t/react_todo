import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
    },
    reducers: {
        add: (state, action) => {
            state[action.payload.id] = action.payload;
        },
        remove: (state, action) => {
            if (state[action.payload.id]) {
                delete state[action.payload.id]; // = undefined;
            }
        }
    },
});

export const { add, remove } = cardsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default cardsSlice.reducer;
