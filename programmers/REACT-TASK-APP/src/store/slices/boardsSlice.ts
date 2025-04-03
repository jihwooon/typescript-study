import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalActive: false,
  boardArray: []
};

const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {

    }
})

export const boardReducer = boardsSlice.reducer;
