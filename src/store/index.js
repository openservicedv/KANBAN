import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import {statusReducer} from "./statusReducer";
import {taskReducer} from "./taskReducer";

const rootReducers = combineReducers({
    statusReducer,
    taskReducer,
})
export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
