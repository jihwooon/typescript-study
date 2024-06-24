import {createSlice} from "@reduxjs/toolkit";
import {IBoardItem} from "../../types";

type boardState = {
    modalActive: boolean
    boardArray: IBoardItem[]
}

const initialState: boardState = {
    modalActive: false,
    boardArray: []
}

const boardSlice = createSlice({
    name: 'board',
    initialState: initialState,
    reducers: {}
});

export const boardReducer = boardSlice.reducer;
