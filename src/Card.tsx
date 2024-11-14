import { useDispatch } from "react-redux";
import { Book, deleteBook } from "./state/books/booksSlice";
import { AppDispatch } from './state/store';
import { closeModal, openModalWithContent } from "./state/modal/modalSlice";
import deleteSVG from "../public/delete.svg";
import editSVG from "../public/edit.svg";
const Card: React.FC<{ book: Book,  }> = ({ book }) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleDelete = ()=>{  
        dispatch(openModalWithContent(
            <div>
                <h2>Are you sure you want to delete this book?</h2>
                <button onClick={()=>{dispatch(deleteBook(book.id));dispatch(closeModal())}}>Yes</button>
                <button onClick={()=>dispatch(closeModal())}>No</button>
            </div>
        ));
    }
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
                    <button><img src={deleteSVG} alt=""  onClick={handleDelete}/></button>
                    <button><img src={editSVG} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;
