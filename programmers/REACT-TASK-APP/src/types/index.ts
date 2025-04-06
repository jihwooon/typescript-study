export interface Board {
  boardId: string;
  boardName: string;
  lists: List[];
}
  
export interface List {
  listId: string;
  listName: string;
  tasks: Task[];
}
  
export interface BoardsState {
  modalActive: boolean;
  boardArray: Board[]; 
}

export interface Task {  
  taskId: string;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
}
