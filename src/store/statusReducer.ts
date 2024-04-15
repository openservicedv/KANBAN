type DefaultStateType = {
    statuses: Array<{}>
    priority: Array<number>
}
const defaultState = {
    statuses: [],
    priority: Array(10).fill(0).map((el, index) => index)
}
export const statusReducer = (state = defaultState, action: any): DefaultStateType => {
    switch (action.type) {
        case "getStatuses":
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
