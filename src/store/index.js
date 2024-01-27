import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import {statusReducer} from "./statusReducer";
import {taskReducer} from "./taskReducer";
import {toggleReducer} from "./toggleReducer";

const rootReducers = combineReducers({
    statusReducer,
    taskReducer,
    toggleReducer,
})
export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
