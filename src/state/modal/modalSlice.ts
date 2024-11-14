import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ModalState {
    isOpen: boolean;
    content: React.ReactNode;
}

const initialState: ModalState = {
    isOpen: false,
    content: null,
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
        openModalWithContent(state, action:PayloadAction<React.ReactNode>) {
            state.isOpen = true;
            state.content = action.payload;
        }

    },
});

export const { openModal, closeModal,openModalWithContent } = modalSlice.actions;
export default modalSlice.reducer;