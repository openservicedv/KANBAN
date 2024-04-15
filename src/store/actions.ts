import {GET_STATUSES} from "./statusReducer";
import {
    CLEAR_NEW_TASK, GET_TASKS, PATCH_TASK, SAVE_TASK_ID, SAVE_TASK_NAME,
    SAVE_TASK_DESCRIPTION, SAVE_TASK_PRIORITY, SAVE_TASK_STATUS
} from "./taskReducer";

export const getStatuses = (statuses: Array<Object>) => ({
    type: GET_STATUSES, payload: statuses
})
export const getTasks = (tasks: Array<Object>) => ({
    type: GET_TASKS, payload: tasks
})
export const saveTaskId = (taskId: string) => ({
    type: SAVE_TASK_ID, payload: taskId
})
export const saveTaskName = (taskName: string) => ({
    type: SAVE_TASK_NAME, payload: taskName
})
export const saveTaskDescription = (taskDescription: string) => ({
    type: SAVE_TASK_DESCRIPTION, payload: taskDescription
})
export const saveTaskStatus = (taskStatus: string) => ({
    type: SAVE_TASK_STATUS, payload: taskStatus
})
export const saveTaskPriority = (taskPriority: number) => ({
    type: SAVE_TASK_PRIORITY, payload: taskPriority
})
export const clearNewTask = () => ({
    type: CLEAR_NEW_TASK
})
export const patchTask = (task: Object, key: string, value: string) => ({
    type: PATCH_TASK, payload: task, key: key, value: value
})

