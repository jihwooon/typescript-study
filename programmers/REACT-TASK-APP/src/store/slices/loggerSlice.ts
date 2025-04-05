import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      addLog: (state, { payload }: PayloadAction<ILogItem>) => {
        state.logArray.push(payload)
      }
    }
})

export const addLog = loggerSlice.actions.addLog
export const loggerReducer = loggerSlice.reducer;
