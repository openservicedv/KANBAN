const defaultState = {
    statuses: [],
    priority: Array(10).fill(0).map((el, index) => index)
}
export const statusReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "getStatuses":
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
