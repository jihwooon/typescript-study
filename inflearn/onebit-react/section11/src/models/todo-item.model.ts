export interface TodoItem {
  id: number,
  isDone: boolean,
  content: string,
  date: number,
}

export interface Action {
  type: string;
  data?: TodoItem;
  targetId?: number;
}
