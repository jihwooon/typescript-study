import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    boardId: string;
    listId: string;
    task: Task
}

interface Task {  
    taskId: string;
    taskName: string;
    taskDescription: string;
    taskOwner: string;
}

const initialState: ModalState = {
    boardId: "board-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "task 0",
        taskDescription: "task description",
        taskOwner: "John"    
    }
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {

    }
})

export const modalReducer = modalSlice.reducer;
