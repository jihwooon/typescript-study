import { createSlice } from "@reduxjs/toolkit";

interface ILogItem {
    logId: string;
    logAuthor: string;
    logMessage: string;
    logTimeStamp: string;
}

interface LoggerState {
  logArray: ILogItem[]
}

const initialState: LoggerState = {
    logArray: [], 
};

const loggerSlice = createSlice({
    name: "logger",
    initialState,
    reducers: {

    }
})

export const loggerReducer = loggerSlice.reducer;
