import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import modalReducer from './modal/modalSlice';
export const store = configureStore({
    reducer: {
        BookStore: booksReducer,
        modalStore: modalReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;