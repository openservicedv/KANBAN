import {GET_STATUSES, StatusType} from "../types";
import {GetStatusesActionType} from "./actions";

export type StatusReducerType = {
    statuses: StatusType[]
}
const defaultState: StatusReducerType = {
    statuses: []
}
export const statusReducer = (state: StatusReducerType = defaultState, action: GetStatusesActionType): StatusReducerType => {
    switch (action.type) {
        case GET_STATUSES:
            console.log(state)
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
