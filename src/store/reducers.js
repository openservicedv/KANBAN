export const defaultState = {
    statuses: [],
    tasks: [],
}
export const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case "allStatuses":
            return {...state, statuses: [...state.statuses, ...action.payload]}
        case "allTasks":
            return {...state, tasks: [...state.tasks, ...action.payload]}
        default:
            return state;
    }
}
