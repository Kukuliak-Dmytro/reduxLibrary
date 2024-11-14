import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Book {
    id: string
    title: string
    genre: string
    description: string
    pages: number
}
export interface booksState {
    books: Book[]
    status: 'loaded' | 'loading' | 'failed'
    error: string | undefined
}
const initialState: booksState = {
    books: [],
    status: 'loading',
    error: undefined
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(readAllBooks.pending, (state) => {
                state.status = 'loading'
            }
            )
            .addCase(readAllBooks.fulfilled, (state, action) => {
                state.status = 'loaded'
                state.books = action.payload
                // console.log(state.books)
            })
            .addCase(readAllBooks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    },
})
export const readAllBooks = createAsyncThunk(
    'books/readAll',
    async () => {
        try
       { const response = await fetch('http://localhost:3001/books');
        const data: Book[] = await response.json();
        return data;}
        catch(error){
            throw Error(`Failed to fetch books:${error}`)
        }
    }
)
export const deleteBook = createAsyncThunk(
    'books/delete',
    async (id: string, { dispatch }) => {
        try {
            const response = await fetch(`http://localhost:3001/books/${id}`, {
                method: 'DELETE',
            });
            const data: Book[] = await response.json();
            dispatch(readAllBooks()); // Call another reducer after deletion
            return data;
        } catch (error) {
            throw Error(`Failed to delete book: ${error}`);
        }
    }
)
export const addBook = createAsyncThunk(
    'books/add',
    async (book:{title:string,description:string,genre:string,pages:number}, { dispatch }) => {
        try {
            const response = await fetch(`http://localhost:3001/books`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });
            const data: Book[] = await response.json();
            dispatch(readAllBooks());
            console.log(data)
            console.log(book)
            return data;
        } catch (error) {
            throw Error(`Failed to add book: ${error}`);
        }
    }
)
export const editBook = createAsyncThunk(
    'books/edit',
    async (book: Book, { dispatch }) => {
        try {
            const response = await fetch(`http://localhost:3001/books/${book.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });
            const data: Book[] = await response.json();
            dispatch(readAllBooks()); 
           
            return data;
        } catch (error) {
            throw Error(`Failed to edit book: ${error}`);
        }
    }
)



// export const { readAllBook } = booksSlice.actions
export default booksSlice.reducer