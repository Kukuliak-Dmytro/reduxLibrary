import { Book } from "./state/books/booksSlice";
import deleteSVG from "../public/delete.svg";
import editSVG from "../public/edit.svg";
import { deleteBook } from "./state/books/booksSlice";
import { AppDispatch } from './state/store';
import { useDispatch } from "react-redux";
const Card: React.FC<{ book: Book,  }> = ({ book }) => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="cardWrapper">
            <div className="card" >
                <div className="card-data">
                    <h2>{book.title}</h2>
                    <p>Description: {book.description}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Pages: {book.pages}</p>
                </div>
                <div className="card-controls">
                    <button><img src={deleteSVG} alt=""  onClick={()=>dispatch(deleteBook(book.id))}/></button>
                    <button><img src={editSVG} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;
