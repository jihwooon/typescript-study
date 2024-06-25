export interface ITask {
  taskId: string;
  taskName: string;
  taskDescription: string;
  taskOwner: string;
}

export interface ILogItem {
  logId: string;
  logAuthor: string;
  logMessage: string;
  logTimestamp: string;
}

export interface IListItem {
  listId: string;
  listName: string;
  tasks: ITask[];
}

export interface IBoardItem {
  boardId: string;
  boardName: string;
  lists: IListItem[];
}
