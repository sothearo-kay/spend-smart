"use client";

import { useState, FC } from "react";
import { todoType } from "@/types/todoType";
import Todo from "./todo";
import AddTodo from "./addTodo";
import {
  addTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from "@/actions/todoAction";

interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  const createTodo = (text: string) => {
    const id = (todoItems.at(-1)?.id || 0) + 1;
    setTodoItems([...todoItems, { id, text, done: false }]);
    addTodo(id, text);
  };

  const changeTodoText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
    updateTodo(id, text);
  };

  const toggleIsTodoDone = (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
    toggleTodo(id);
  };

  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">To-do app</h1>
      <AddTodo createTodo={createTodo} />
      <div className="mt-6 space-y-4">
        {todoItems.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
