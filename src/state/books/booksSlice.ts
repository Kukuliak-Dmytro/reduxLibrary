import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Book {
    id: string
    title: string
    year: number
    description: string
    pages: number
}
interface booksState {
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
        .addCase(readAllBooks.fulfilled, (state,action) => {
            state.status = 'loaded'
            state.books = action.payload
            console.log(state.books)
        })
        .addCase(readAllBooks.rejected, (state,action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})
export const readAllBooks = createAsyncThunk(
    'books/readAll',
    async () => {
        let data:Book[] = []
        await new Promise(() => 
        fetch('http://localhost:3001/items')
        .then((result)=>{console.log(result);data=result}))
        return data
})

// export const { readAllBook } = booksSlice.actions
export default booksSlice.reducer