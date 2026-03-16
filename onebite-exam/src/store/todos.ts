import type { Todo } from "@/tyoes"
import { create } from "zustand"
import { combine } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

const initialState : {
    todos: Todo[]
} = {
    todos: []
}

const useTodoStore = create(
   immer(
    combine(initialState, (set) => ({
        actions: {
            createTodo: (content: string) => {
               set((state) => {
                state.todos.push({
                    id: Date.now(),
                    content: content,
                })
               }) 
            },
            deleteTodo: (id: number) => {
                set(state => {
                    state.todos = state.todos.filter(todo => todo.id !== id)
                })
            }
        }
    }))
   ) 
)

export const useTodso = () => {
  const todos = useTodoStore((state) => state.todos)
  return todos
}

export const useCreateTodo = () => {
  const createTodo = useTodoStore((state) => state.actions.createTodo)
  return createTodo
}

export const useDeleteTodo = () => {
  const deleteTodo = useTodoStore((state) => state.actions.deleteTodo)
  return deleteTodo
}
