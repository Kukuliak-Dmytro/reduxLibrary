import { booksState } from "./state/books/booksSlice";
import { useEffect, useState } from "react";
import { Book } from "./state/books/booksSlice";
import Card from "./Card";

const Pagination: React.FC<{ booksState: booksState,currentPage:number, resultsPerPage:number}> = ({ booksState,currentPage,resultsPerPage }) => {
    
    const [page,setPage] = useState(currentPage);
    const [currentResults,setCurrentResults] = useState<Book[]>();
    const [loading, setLoading] = useState(booksState.status === 'loading');

    const previousPage = ()=>{
        setLoading(true);
        setTimeout(() => {
            setPage((prev)=>prev-1);
            setLoading(false);
        }, 500);
    }

    const nextPage = ()=>{
        setLoading(true);
        setTimeout(() => {
            setPage((prev)=>prev+1);
            setLoading(false);
        }, 500);
    }
    useEffect(()=>{
        setLoading(booksState.status === 'loading');
    }
    ,[booksState])
    useEffect(()=>{
        const indexOfLastResult = page * resultsPerPage;
        const indexOfFirstResult = indexOfLastResult - resultsPerPage;
        setCurrentResults(booksState.books.slice(indexOfFirstResult,indexOfLastResult))
    },[page,booksState,resultsPerPage])

    if(loading || booksState.status === 'loading'){
        return <div className="loading"></div>
    }else return (
        <div>
            {currentResults?.map((book)=><Card book={book} key={book.id}></Card>)}
            <button onClick={previousPage} disabled={page === 1}>Previous</button>
            <button onClick={nextPage} disabled={page === Math.ceil(booksState.books.length / resultsPerPage)}>Next</button>
        </div>
    );
}
export default Pagination;