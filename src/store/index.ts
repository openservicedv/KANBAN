import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import {statusReducer} from "./statusReducer";
import {taskReducer} from "./taskReducer";

const rootReducer = combineReducers({
    statusReducer,
    taskReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
