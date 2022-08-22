import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    gameLimit: 8,
    gameOffset: 0
}

export const loadSlice = createSlice({
    name: 'load',
    initialState,
    reducers: {
        loadMoreGames: state => {
            state.gameLimit += 8
        },
    }
})

export const {
    loadMoreGames,
} = loadSlice.actions;

export const loadReducer = loadSlice.reducer;