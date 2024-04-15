import {
    CLEAR_NEW_TASK, GET_TASKS, PATCH_TASK, SAVE_TASK_DESCRIPTION,
    SAVE_TASK_ID, SAVE_TASK_NAME, SAVE_TASK_PRIORITY, SAVE_TASK_STATUS, TaskType
} from "../types";
// import {ActionTypes} from "./actions";

export type TaskReducerType = {
    tasks: Array<TaskType>,
    newTask: TaskType
}

const defaultState: TaskReducerType = {
    tasks: [],
    newTask: {
        name: '',
        description: '',
        priority: '',
        status: '',
    }
}
export const taskReducer = (state = defaultState, action: any): TaskReducerType => {
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
            return {
                ...state, newTask: {
                    name: '',
                    description: '',
                    priority: '',
                    status: '',
                }
            }
        case PATCH_TASK:
            return {
                ...state, newTask:
                    {...action.payload, [action.key]: action.value, key: action.key}
            }
        default:
            return state;
    }
}
