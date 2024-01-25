const defaultState = {
    tasks: [],
    newTask: {},
    modal: false,
}
export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "getTasks":
            return {...state, tasks: [...action.payload]}
        case "saveTaskName":
            return {...state, newTask: {...state.newTask, name: action.payload}}
        case "saveTaskDescription":
            return {...state, newTask: {...state.newTask, description: action.payload}}
        case "saveTaskStatus":
            return {...state, newTask: {...state.newTask, status: action.payload}}
        case "saveTaskPriority":
            return {...state, newTask: {...state.newTask, priority: action.payload}}
        case "clearNewTask":
            return {...state, newTask: action.payload}
        case "toggle":
            return {...state, modal: action.payload}
        default:
            return state;
    }
}
