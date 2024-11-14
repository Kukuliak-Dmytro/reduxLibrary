import { useDispatch } from "react-redux";
import { Book } from "./state/books/booksSlice";
import { AppDispatch } from './state/store';
import {  openModalWithConfirmation } from "./state/modal/modalSlice";
import deleteSVG from "../public/delete.svg";
import editSVG from "../public/edit.svg";
import { openModalWithForm } from "./state/modal/modalSlice";
const Card: React.FC<{ book: Book,  }> = ({ book }) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleDelete = ()=>{  
        dispatch(openModalWithConfirmation(book));
    }
    const handleEdit = ()=>{
        dispatch(openModalWithForm(book));
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
                    <button><img src={editSVG} alt="" onClick={handleEdit}/></button>
                </div>
            </div>
        </div>
    );
};

export default Card;
