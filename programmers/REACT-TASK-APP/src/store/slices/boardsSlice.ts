import { PayloadAction ,createSlice } from "@reduxjs/toolkit";
import { Board, BoardsState } from "../../types";

type TADDBoardAction = {
  board: Board;
}

type TDeleteListAction = {
  boardId: string;
  listId: string;
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

export const { addBoard, deleteBoard } = boardsSlice.actions
export const boardReducer = boardsSlice.reducer;
