const defaultState = {
    statuses: [],
}
export const statusReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "getStatuses":
            return {...state, statuses: [...action.payload]}
        default:
            return state;
    }
}
