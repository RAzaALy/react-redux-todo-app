import { combineReducers } from "redux";
import todoReducer from "./todolist/todoListReducer"

const rootReducer = combineReducers({todo : todoReducer})

export default rootReducer;