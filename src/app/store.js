import {configureStore} from '@reduxjs/toolkit';
import cardsReducer from '../reducers/cards/cardsSlice';
import groupReducer from '../reducers/groups/groupsSlice';

export default configureStore({
    reducer: {
        groups: groupReducer,
        cards: cardsReducer
    }
});
