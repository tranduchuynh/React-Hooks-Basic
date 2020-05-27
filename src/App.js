import React from "react";
import queryString from "query-string";
import "./App.scss";

import { useState } from "react";
import Todolist from "./components/TodoList/Todolist";
import TodoForm from "./components/TodoForm";
import { useEffect } from "react";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love my parent" },
    { id: 2, title: "We love my parent" },
    { id: 3, title: "They love my parent" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        // _limit=10&_page=3
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("new page: ", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValues) {
  //   // add new todo to current todo list
  //   console.log(formValues);
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  return (
    <div className="app">
      <h1>Welcome to react hooks</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <Todolist todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
