import { createSlice } from '@reduxjs/toolkit';

// TODO: check if it matches with the bookform 
// TODO EXTRA: throw an error is case the user doesnt insert all the infos
const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn: "ISBN",
        title: "Title",
        author: "Author",
        length: "Length",
        genre: "Genre",
        year: "Year"
    },
    // setting the input to the state.title or whatever so we can send it to the database
    reducers: {
        chooseIsbn: (state, action ) => { state.isbn = action.payload },
        chooseTitle: (state, action ) => { state.title = action.payload },
        chooseAuthor: (state, action ) => { state.author = action.payload },
        chooseLength: (state, action ) => { state.length = action.payload },
        chooseGenre: (state, action ) => { state.genre = action.payload },
        chooseYear: (state, action ) => { state.year = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseIsbn, chooseTitle, chooseAuthor, chooseLength, chooseGenre, chooseYear } = rootSlice.actions