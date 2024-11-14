import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../books/booksSlice';
interface ModalState {
    isOpen: boolean;
    isConfirmation: boolean;
    isForm: boolean;
    isCreate: boolean;
    currentBook: Book | null

    
}
const initialState: ModalState = {
    isOpen: false,
    isConfirmation: false,
    isForm: false,
    isCreate: false,
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
            state.isCreate = false;
        },
        openModalWithForm(state, action: PayloadAction<Book>) {
            state.isOpen = true;
            state.isConfirmation = false;
            state.isForm = true
            state.currentBook = action.payload;
            state.isCreate = false;
        },
        openModalWithCreate(state) {
            state.isOpen = true;
            state.isConfirmation = false;
            state.isForm = true;
            state.isCreate = true;
            state.currentBook = null;
    }}
});

export const { openModal, closeModal, openModalWithConfirmation, openModalWithForm,openModalWithCreate } = modalSlice.actions;
export default modalSlice.reducer;