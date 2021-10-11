import React, {useState } from 'react'
import Img from "../logo.png"
import {GrFormAdd} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'

import { editAbleTodo } from '../redux/todolist/todoListAction'
import { useHistory } from 'react-router'

const EditNote = ({name}) => {
    const editState = useSelector(state => state.todo.editTodo)
    const dispatch = useDispatch()
    const [editTodo, setEditTodo] = useState(editState.payload)
    const history = useHistory()


    const submitHandler = e => {
        e.preventDefault()
        dispatch(editAbleTodo(editTodo,editState.id, editState.complitation)) 
        history.push('/')
    }

    return (
        <>
             <div className="addNote">
                <img src={Img} alt="logo" />
                <h1 className='type'>{name} a Todo</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Edit todo" value={editTodo} onChange={e => setEditTodo(e.target.value)}/>
                    <button className="submit"><GrFormAdd /></button>
                </form>

            </div>
        </>
    )
}

export default EditNote
