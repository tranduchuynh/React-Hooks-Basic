import React from "react";
import "./App.scss";

import { useState } from "react";
import Todolist from "./components/TodoList/Todolist";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love my parent" },
    { id: 2, title: "We love my parent" },
    { id: 3, title: "They love my parent" },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Welcome to react hooks</h1>
      <Todolist todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
