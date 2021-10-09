import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import {MdModeEdit} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteTodo, doTodo, editTodo } from '../redux/todolist/todoListAction'

const Todo = ({complitation, payload,id}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <>
        <div className={`list ${complitation}`} onContextMenu={
          (e) => {
          e.preventDefault() 
          dispatch(doTodo(id))
        }
          }>
              <p>   
              {payload}     
              </p>
              <div className="actions">
                  <div className="icon deleted" onClick={() => dispatch(deleteTodo(id))}>

                    <AiFillDelete className='del' />
                  </div>
                  <div className="icon edited">
                    <MdModeEdit className='edit' onClick={() => { 
                      dispatch(editTodo({complitation,payload,id,}))
                      history.push('/edit')
                  } } />

                  </div>
              </div>
        </div>
        </>
    )
}

export default Todo
