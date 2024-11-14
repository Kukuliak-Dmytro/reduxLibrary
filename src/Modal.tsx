import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import { closeModal } from './state/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store';



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

    return (
        <div style={styles.modalOverlay} onClick={onClose}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.modalClose} onClick={onClose}>
                    &times;
                </button>
                {modalData.content}
            </div>
        </div>
    );
};

export default Modal;