import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducers} from "./reducers";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";

const rootReducers = combineReducers({
    reducers,
})
export const store = legacy_createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
