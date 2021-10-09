import React from "react";
import {FaCalendar} from "react-icons/fa"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Footer from "./Footer";
import Todo from './Todo'

const Main = () => {

  const todoList = useSelector(state => state.todo.todoList)

  const history = useHistory()

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

  return(
   <>
       <div className="container">
         <div className="header">
            <h1 className="date__time">
              {day[date.getDay() - 1]}, {month[date.getMonth()]} {date.getDate()}
            </h1>
              <FaCalendar className='calendar_icon' />
         </div>
         <div className="main__container">
            <button className="add_btn" onClick={() => history.push('/add')}>
                Add Note
            </button>
         <div className="todo_list">
            {todoList.map((todo) => <Todo key={todo.id} {...todo}/>)}
         </div>
         <Footer />
         </div>
       </div>
  </>
)
};

export default Main;
