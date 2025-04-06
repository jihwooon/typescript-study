import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types";

interface TSetModalDataAction {
 boardId: string;
 listId: string;
 task: Task;
}

interface ModalState {
    boardId: string;
    listId: string;
    task: Task
    modalActive: boolean;
}

const initialState: ModalState = {
    boardId: "board-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "task 0",
        taskDescription: "task description",
        taskOwner: "John"    
    },
    modalActive: true
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
      setModalData: (state, { payload }: PayloadAction<TSetModalDataAction>) => {
        state.boardId = payload.boardId;
        state.listId = payload.listId;
        state.task = payload.task;
      },
      setModalActive: (state, {payload} : PayloadAction<boolean>) => {
        state.modalActive = payload
      }
    }
})

export const { setModalData, setModalActive } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
