import type { TodoItem } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface TodoState {
  todos: TodoItem[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      const newTodo = {
        ...action.payload,
        id: state.todos.length > 0 ? Math.max(...state.todos.map((t) => t.id)) + 1 : 1,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action: PayloadAction<TodoItem>) => {
      const index = state.todos.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    setTodos: (state, action: PayloadAction<TodoItem[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, setTodos } = todoSlice.actions;
export { todoSlice };
