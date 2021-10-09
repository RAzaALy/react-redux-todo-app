import { ADD_TODO, DELETE_ALL_TODO, DELETE_TODO, DO_ALL_TODO, DO_TODO, EDITABLE_TODO, EDIT_TODO, PEND_ALL_TODO } from "./todoListTypes"


export const addTodo = (todo,id,complitation) => ({
    type : ADD_TODO,
    payload : todo,
    id : id,
    complitation : complitation
})

export const editTodo = todo => ({
    type : EDIT_TODO,
    payload : todo
})

export const deleteTodo = id => ({
    type : DELETE_TODO,
    payload : id
})


export const deleteAllTodo = () => ({
    type : DELETE_ALL_TODO
})


export const doAllTodo = () => ({
    type : DO_ALL_TODO,
})

export const pendAllTodo = () => ({
    type : PEND_ALL_TODO
})

export const doTodo = id => ({
    type : DO_TODO,
    payload : id
})

export const editAbleTodo = (todo,id,complitation) => ({
    type : EDITABLE_TODO,
    payload : todo,
    id : id,
    complitation : complitation

})
