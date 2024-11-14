import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import { closeModal } from './state/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store';
import { deleteBook } from './state/books/booksSlice';
import { editBook } from './state/books/booksSlice';
import { Formik, Field, Form } from 'formik';
import { Book } from './state/books/booksSlice';
const Modal: React.FC = () => {
    const modalData = useSelector((state: RootState) => state.modalStore);
    const dispatch = useDispatch<AppDispatch>();
    
    if (!modalData.isOpen) return null;

    const styles = {
        modalOverlay: {
            position: 'fixed' as 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalContent: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            position: 'relative' as 'relative',
            minWidth: '300px',
        },
        modalClose: {
            position: 'absolute' as 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
        },
    };
    const onClose = () => {
        dispatch(closeModal())
    }
    if (modalData.isConfirmation) {
        return (
            <div style={styles.modalOverlay} onClick={onClose}>
                <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button style={styles.modalClose} onClick={onClose}>
                        &times;
                    </button>
                    <div >
                        <h2>Are you sure you want to delete this book?</h2>
                        <button onClick={() => { dispatch(deleteBook(modalData.currentBook!.id)); dispatch(closeModal()) }}>Yes</button>
                        <button onClick={() => dispatch(closeModal())}>No</button>
                    </div>
                </div>
            </div>

        );
    }
    else if (modalData.isForm) {

        return (
            <div style={styles.modalOverlay} onClick={onClose}>
                <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button style={styles.modalClose} onClick={onClose}>
                        &times;
                    </button>
                    <div className="form">
                        <h2>Edit book</h2>
                        <Formik
                            initialValues={{
                                id: modalData.currentBook?.id,
                                title: modalData.currentBook?.title,
                                description: modalData.currentBook?.description,
                                genre: modalData.currentBook?.genre,
                                pages: modalData.currentBook?.pages,
                                
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                dispatch(editBook(values as Book)); 
                                dispatch(closeModal());
                            }}
                        >
                            <Form className='form'>
                                <label htmlFor="title">Title</label>
                                <Field id="title" name="title" placeholder="Title" />
                                
                                <label htmlFor="description">Description</label>
                                <Field
                                    id="description"
                                    name="description"
                                    placeholder="description"
                                />
                                <label htmlFor="genre">Genre</label>
                                <Field id="genre" name="genre" placeholder="genre" />

                                
                                <label htmlFor="pages">Pages</label>
                                <Field
                                    id="pages"
                                    name="pages"
                                    placeholder="pages"
                                />
                                <button type='submit'>Save</button>
                                <button type='button' onClick={() => dispatch(closeModal())}>Cancel</button>
                            </Form>
                        </Formik>
                       
                    </div>
                </div>
            </div>
        );
    };
}
export default Modal;