import { booksState } from "./state/books/booksSlice";
import { useEffect, useState } from "react";
import { Book } from "./state/books/booksSlice";
import Card from "./Card";
const Pagination: React.FC<{ booksState: booksState,currentPage:number, resultsPerPage:number}> = ({ booksState,currentPage,resultsPerPage }) => {
    
    const [page,setPage] = useState(currentPage);
    const [currentResults,setCurrentResults] = useState<Book[]>();
    useEffect(()=>{
        const indexOfLastResult = page * resultsPerPage;
        const indexOfFirstResult = indexOfLastResult - resultsPerPage;
        setCurrentResults(booksState.books.slice(indexOfFirstResult,indexOfLastResult))
    },[page,booksState,resultsPerPage])
    if(booksState.status === 'loading'){
        return <div>Loading...</div>
    }
    return (
        <div>
            {currentResults?.map((book)=><Card book={book} key={book.id}></Card>)}
            <button onClick={()=>{setTimeout(() => setPage((prev)=>prev-1), 500)}}>Previous</button>
            <button onClick={()=>{setTimeout(() => setPage((prev)=>prev+1), 500)}}>Next</button>
        </div>
    );
}
export default Pagination;