import {GET_STATUSES, StatusType} from "../types";

export type StatusReducerType = {
    statuses: StatusType[]
}
const defaultState: StatusReducerType = {
    statuses: [],
}
export const statusReducer = (state = defaultState, action: any): StatusReducerType => {
    switch (action.type) {
        case GET_STATUSES:
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
