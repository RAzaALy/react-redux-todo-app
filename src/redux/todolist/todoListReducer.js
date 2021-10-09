import { ADD_TODO, DELETE_ALL_TODO, DELETE_TODO, DO_ALL_TODO, DO_TODO, EDIT_TODO, PEND_ALL_TODO, EDITABLE_TODO } from "./todoListTypes";

const initialState = {
    todoList : [],
    editTodo : {}

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        // todoList : [...state.todoList , {todo : action.payload , id : action.id , completation : action.completation}]
        todoList : [...state.todoList, {...action}]
        
      };

    case EDIT_TODO:
      return {
          ...state,
          editTodo : action.payload
      };

    case DELETE_TODO:return{
      ...state,
      todoList : state.todoList.filter(todo => todo.id !== action.payload)
    }

    case DELETE_ALL_TODO :return{
      ...state,
      todoList : []
    }

    case DO_ALL_TODO : return {
      ...state,
      todoList : state.todoList.map(todo => ({...todo , complitation: "completed"}))
    }

    case PEND_ALL_TODO : return {
      ...state,
      todoList : state.todoList.map(todo => ({...todo, complitation : 'uncompleted'}))
    }

    case DO_TODO:
      return {
      ...state,
      todoList : state.todoList.map((todo) =>{
        if(todo.id === action.payload){
          return {...todo , complitation : todo.complitation === 'completed' ? "uncompleted" : "completed"}
        }else{
          return todo
        }
      } )
    }

    case EDITABLE_TODO: return{
      ...state,
      todoList : state.todoList.map(todo => todo.id === action.id ? {...todo, payload : action.payload} : todo)
    
    }

    

    default:
      return state;
  }
};

export default reducer;
