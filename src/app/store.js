import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cardsReducer from '../reducers/cards/cardsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer
  },
});
