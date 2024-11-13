import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch } from './state/store';
import {readAllBooks} from './state/books/booksSlice';
const Books = () => {
    const books = useSelector((state: any) => state.books);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
        <h1>Books</h1>
        <p>books</p>
        <button onClick={()=>dispatch(readAllBooks())}>Read all books</button>
        </div>
    );
}
export default Books;
