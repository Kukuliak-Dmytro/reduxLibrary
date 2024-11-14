import { Book } from "./state/books/booksSlice";

const Card: React.FC<{ book: Book,  }> = ({ book }) => {
    return (
        <div className="cardWrapper">
            <div className="card" >
                <h2>{book.title}</h2>
                <p>Description: {book.description}</p>
                <p>Genre: {book.genre}</p>
                <p>Pages: {book.pages}</p>
            </div>
        </div>
    );
};

export default Card;
