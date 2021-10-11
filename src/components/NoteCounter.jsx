import React from "react";
import { MdOutlineAirplanemodeActive, MdPlayDisabled } from "react-icons/md";
import { useSelector } from "react-redux";
import { SiVirustotal } from "react-icons/si";

const NoteCounter = () => {
    
  const totalTodo = useSelector((state) => state.todo.allTodo);
  const activeTodo = useSelector((state) => state.todo.activeTodo);
  const unActiveTodo = useSelector((state) => state.todo.unActiveTodo);

  
  return (
    <>
      <div className="note__counter">
        <p className="icon">
          <SiVirustotal /> <span> {totalTodo}</span>
        </p>
        <p className="icon">
          <MdOutlineAirplanemodeActive /> <span> {activeTodo}</span>
        </p>
        <p className="icon">
          <MdPlayDisabled /> <span> {unActiveTodo}</span>
        </p>
      </div>
    </>
  );
};

export default NoteCounter;
