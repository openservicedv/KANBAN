import {GET_STATUSES, StatusType} from "../types";
// import {GetStatusesActionType} from "./actions";

export type StatusReducerType = {
    statuses: StatusType[]
}
const initialState: StatusReducerType = {
    statuses: []
}
export const statusReducer = (state: StatusReducerType = initialState, action: any): StatusReducerType => {
    switch (action.type) {
        case GET_STATUSES:
            console.log(state)
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
