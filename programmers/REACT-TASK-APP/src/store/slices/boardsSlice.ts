import { PayloadAction ,createSlice } from "@reduxjs/toolkit";
import { Board, BoardsState, List, Task } from "../../types";

type TADDBoardAction = {
  board: Board;
}

type TDeleteListAction = {
  boardId: string;
  listId: string;
}

type TAddListAction = {
  boardId: string;
  list: List;
}

type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: Task;
}

const initialState: BoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시품",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "Description",
              taskOwner: "John",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "Description",
              taskOwner: "John",
            },
          ]
        },
        {
          listId: "list-1",
          listName: "List 2",
          tasks: [
            {
              taskId: "task-3",
              taskName: "Task 3",
              taskDescription: "Description",
              taskOwner: "John",
            },
            {
              taskId: "task-4",
              taskName: "Task 4",
              taskDescription: "Description",
              taskOwner: "John",
            },
          ]
        }
      ]
    }
  ]
};

const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
      addBoard: (state, { payload }: PayloadAction<TADDBoardAction>) => {
        state.boardArray.push(payload.board)
      },

      addList: (state, {payload}: PayloadAction<TAddListAction>) => {
        state.boardArray.map((board) => (
          board.boardId === payload.boardId ? { ...board, lists: board.lists.push(payload.list)}
          : board
        ))
      },

      addTask: (state, {payload}: PayloadAction<TAddTaskAction>) => {
        state.boardArray.map((board) => board.boardId === payload.boardId ? {
          ...board,
          lists: board.lists.map((list) => list.listId === payload.listId ? {
            ...list,
            tasks: list.tasks.push(payload.task)
          }: list)
        }: board
       )
      },

      deleteBoard: (state, { payload }: PayloadAction<TDeleteListAction>) => {
        state.boardArray.map((board) => (
          board.boardId === payload.boardId ? {
            ...board,
            lists: board.lists.filter(
              list => list.listId !== payload.listId
            )
          } : board
        ))
      }
    }
})

export const { addBoard, deleteBoard, addTask, addList } = boardsSlice.actions
export const boardReducer = boardsSlice.reducer;
