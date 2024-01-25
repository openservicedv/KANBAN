import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import {statusReducer} from "./statusReducer";
import {taskReducer} from "./taskReducer";
import {modalReducer} from "./modalReducer";
import {cardReducer} from "./cardReducer";

const rootReducers = combineReducers({
    statusReducer,
    taskReducer,
    modalReducer,
    cardReducer,
})
export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
