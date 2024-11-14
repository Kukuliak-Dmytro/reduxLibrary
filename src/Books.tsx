import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch, RootState } from './state/store';
import {readAllBooks} from './state/books/booksSlice';
import Pagination from './Pagination';
import { useEffect } from 'react';
const Books = () => {
    const books = useSelector((state:RootState) => state.BookStore);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{dispatch(readAllBooks())},[])
    return (
        <div>
        <h1>Redux Library</h1>
        <Pagination booksState={books} currentPage={1} resultsPerPage={5}></Pagination>
        <button onClick={()=>dispatch(readAllBooks())}>Read all books</button>
        </div>
    );
}
export default Books;
