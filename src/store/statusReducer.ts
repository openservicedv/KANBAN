import {StatusType} from "../types";

export const GET_STATUSES = "getStatuses"

type StatusDefaultStateType = {
    statuses: Array<StatusType>
    priority: Array<number>
}
const defaultState: StatusDefaultStateType = {
    statuses: [],
    priority: Array(10).fill(0).map((el, index) => index)
}
export const statusReducer = (state = defaultState, action: any): StatusDefaultStateType => {
    switch (action.type) {
        case GET_STATUSES:
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
