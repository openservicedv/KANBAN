export const GET_TASKS = "getTasks"
export const SAVE_TASK_ID = "saveTaskId"
export const SAVE_TASK_NAME = "saveTaskName"
export const SAVE_TASK_DESCRIPTION = "saveTaskDescription"
export const SAVE_TASK_STATUS = "saveTaskStatus"
export const SAVE_TASK_PRIORITY = "saveTaskPriority"
export const CLEAR_NEW_TASK = "clearNewTask"
export const PATCH_TASK = "patchTask"

export type TaskDefaultStateType = {
    tasks: Array<Object>,
    newTask: Object
}

const defaultState: TaskDefaultStateType = {
    tasks: [],
    newTask: {}
}
export const taskReducer = (state = defaultState, action: any): TaskDefaultStateType => {
    switch (action.type) {
        case GET_TASKS:
            return {...state, tasks: [...action.payload]}
        case SAVE_TASK_ID:
            return {...state, newTask: {...state.newTask, _id: action.payload}}
        case SAVE_TASK_NAME:
            return {...state, newTask: {...state.newTask, name: action.payload}}
        case SAVE_TASK_DESCRIPTION:
            return {...state, newTask: {...state.newTask, description: action.payload}}
        case SAVE_TASK_STATUS:
            return {...state, newTask: {...state.newTask, status: action.payload}}
        case SAVE_TASK_PRIORITY:
            return {...state, newTask: {...state.newTask, priority: action.payload}}
        case CLEAR_NEW_TASK:
            return {...state, newTask: {}}
        case PATCH_TASK:
            return {
                ...state, newTask:
                    {...action.payload, [action.key]: action.value, key: action.key}
            }
        default:
            return state;
    }
}
