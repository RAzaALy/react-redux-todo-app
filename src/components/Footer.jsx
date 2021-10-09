import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllTodo, doAllTodo, pendAllTodo } from '../redux/todolist/todoListAction'

const Footer = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="footer">
                <button className="clearAll" onClick={() => dispatch(deleteAllTodo())}>Clear All</button>
                <button className="pendAll" onClick={() => dispatch(pendAllTodo())}>Pend All</button>
                <button className="doAll" onClick={() => dispatch(doAllTodo())}>Do All</button>
            </div>
        </>
    )
}

export default Footer
