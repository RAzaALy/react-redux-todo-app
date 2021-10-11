import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { checkTodoCounter, searchTodos } from "../redux/todolist/todoListAction";
import Footer from "./Footer";
import NoteCounter from "./NoteCounter";
import Todo from "./Todo";
 
const Main = () => {

  const [searchValue, setSearchValue] = useState('')

  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  



  useEffect(() => {
    dispatch(checkTodoCounter());
  },[todoList]);

  const history = useHistory();


  useEffect(() => {
    dispatch(searchTodos(searchValue))
  },[searchValue])

  
  const onChangeHandler = e => {
    setSearchValue(e.target.value)
  }







  const date = new Date();
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="date__time">
            {day[date.getDay()]}, {month[date.getMonth()]} {date.getDate()}
          </h1>
          <FaCalendar className="calendar_icon" />
        </div>
        <div className="main__container">
          <button className="add_btn" onClick={() => history.push("/add")}>
            Add Note
          </button>
          <NoteCounter />
          {
            // todoList.length >= 5 ?
            <input className="search__input" placeholder="Search a todo" value={searchValue} onChange={onChangeHandler} />  
            // null

          }

          <div className="todo_list">
            {todoList.map((todo) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
