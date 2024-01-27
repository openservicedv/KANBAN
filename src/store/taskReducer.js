const defaultState = {
    tasks: [],
    newTask: {},
}
export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "getTasks":
            return {...state, tasks: [...action.payload]}
        case "saveTaskId":
            return {...state, newTask: {...state.newTask, _id: action.payload}}
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
        case "patchTask":
            return {
                ...state, newTask:
                    {...action.payload, [action.key]: action.value, key: action.key}
            }
        default:
            return state;
    }
}
