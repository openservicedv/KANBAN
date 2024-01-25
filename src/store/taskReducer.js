const defaultState = {
    tasks: [],
}
export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "getTasks":
            return {...state, tasks: [...action.payload]}
        default:
            return state;
    }
}
