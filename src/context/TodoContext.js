import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: "1",
      todoMsg: "Add text",
      marked: false,
    },
  ],
  addTodo: (todos) => {},
  updateTodo: (id, todos) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
