import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import {statusReducer} from "./statusReducer";
import {taskReducer} from "./taskReducer";
import {cardReducer} from "./cardReducer";

const rootReducers = combineReducers({
    statusReducer,
    taskReducer,
    cardReducer,
})
export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
