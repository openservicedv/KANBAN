import {GET_STATUSES, StatusType} from "../types";

export type StatusReducerType = {
    statuses: StatusType[]
}
const initialState: StatusReducerType = {
    statuses: []
}
export const statusReducer = (state: StatusReducerType = initialState, action: any): StatusReducerType => {
    switch (action.type) {
        case GET_STATUSES:
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
