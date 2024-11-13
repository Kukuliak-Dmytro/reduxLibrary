import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch, RootState } from './state/store';
import {readAllBooks} from './state/books/booksSlice';
const Books = () => {
    const books = useSelector((state:RootState) => state.BookStore);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
        <h1>Redux Library</h1>
        <ul>{books.books.map((book)=><li key={book.id}>{book.title}</li>)}</ul>
        <button onClick={()=>dispatch(readAllBooks())}>Read all books</button>
        </div>
    );
}
export default Books;
