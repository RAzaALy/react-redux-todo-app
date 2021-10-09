import React, { useState } from 'react'
import Img from "../logo.png"
import {GrFormAdd} from "react-icons/gr"
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/todolist/todoListAction'
import { useHistory } from 'react-router';

const AddNote = ({name}) => {

    const dispatch = useDispatch()
    const history = useHistory()


    const [todo, setTodo] = useState('')
    const submitHandler = e => {
        e.preventDefault()
        if(todo.trim()){
            dispatch(addTodo(todo,uuidv4(),'uncompleted'))
        }
        setTodo('')
        history.push('/')

    }



    return (
        <>
            <div className="addNote">
                <img src={Img} alt="logo" />
                <h1 className='type'>{name} a Todo</h1>
                <form onSubmit={submitHandler} >
                    <input type="text" placeholder="add todo" value={todo} onChange={e => setTodo(e.target.value)}/>
  
                    <button className="submit"><GrFormAdd /></button>
                </form>

            </div>
        </>
    )
}



export default AddNote
