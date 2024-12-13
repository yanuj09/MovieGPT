import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false,
        gptMoviesNames : null,
        movieResults : null,

    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult: (state,action) => {
            const {movieName, movieResults} = action.payload;
            state.gptMoviesNames = movieName;
            state.movieResults = movieResults;
        },
    },
});

export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions;
export default gptSlice.reducer;