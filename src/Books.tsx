import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch, RootState } from './state/store';
import {addBook, Book, readAllBooks} from './state/books/booksSlice';
import Pagination from './Pagination';
import { useEffect } from 'react';
import Modal from './Modal';
import { openModalWithCreate } from './state/modal/modalSlice';
const Books = () => {
    const books = useSelector((state:RootState) => state.BookStore);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{dispatch(readAllBooks())},[])
    return (
        <div>
        <Modal></Modal>
        <h1>Redux Library</h1>
        <button onClick={()=>dispatch(openModalWithCreate())}>Create a new book</button>
        

        <Pagination booksState={books} currentPage={1} resultsPerPage={5}></Pagination>
        </div>
    );
}
export default Books;
