import { createSlice } from "@reduxjs/toolkit";

const clickedMovieSlice = createSlice({
    name: "clickedMovie",
    initialState : null,
    reducers : {
        addClickedMovie : (state,action) => {
            state.clickedMovie = action.payload;
        },
    }
});

export const {addClickedMovie} = clickedMovieSlice.actions;

export default clickedMovieSlice.reducer;