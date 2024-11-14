import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../books/booksSlice';
interface ModalState {
    isOpen: boolean;
    isConfirmation: boolean;
    isForm: boolean;
    currentBook: Book | null

    
}
const initialState: ModalState = {
    isOpen: false,
    isConfirmation: false,
    isForm: false,
    currentBook: null,


};
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true;
        },
        closeModal(state) {
            state.isOpen = false;
        },
        openModalWithConfirmation(state, action: PayloadAction<Book>) {
            state.isOpen = true;
            state.isConfirmation = true;
            state.isForm = false;
            state.currentBook = action.payload;
        },
        openModalWithForm(state, action: PayloadAction<Book>) {
            state.isOpen = true;
            state.isConfirmation = false;
            state.isForm = true
            state.currentBook = action.payload;


        },
    }
});

export const { openModal, closeModal, openModalWithConfirmation, openModalWithForm } = modalSlice.actions;
export default modalSlice.reducer;