import {GET_STATUSES} from "./statusReducer";
import {
    CLEAR_NEW_TASK, GET_TASKS, PATCH_TASK, SAVE_TASK_ID, SAVE_TASK_NAME,
    SAVE_TASK_DESCRIPTION, SAVE_TASK_PRIORITY, SAVE_TASK_STATUS
} from "./taskReducer";

type GetStatusesActionType = {
    type: typeof GET_STATUSES
    payload: Array<Object>
}
export const getStatuses = (statuses: Array<Object>): GetStatusesActionType => ({
    type: GET_STATUSES,
    payload: statuses
})

type GetTaskActionType = {
    type: typeof GET_TASKS
    payload: Array<Object>
}
export const getTasks = (tasks: Array<Object>): GetTaskActionType => ({
    type: GET_TASKS,
    payload: tasks
})

type SaveTaskIdActionType = {
    type: typeof SAVE_TASK_ID
    payload: string
}
export const saveTaskId = (taskId: string): SaveTaskIdActionType => ({
    type: SAVE_TASK_ID,
    payload: taskId
})

type SaveTaskNameActionType = {
    type: typeof SAVE_TASK_NAME
    payload: string
}
export const saveTaskName = (taskName: string): SaveTaskNameActionType => ({
    type: SAVE_TASK_NAME,
    payload: taskName
})

type SaveTaskDescriptionActionType = {
    type: typeof SAVE_TASK_DESCRIPTION
    payload: string
}
export const saveTaskDescription = (taskDescription: string): SaveTaskDescriptionActionType => ({
    type: SAVE_TASK_DESCRIPTION,
    payload: taskDescription
})

type SaveTaskStatusActionType = {
    type: typeof SAVE_TASK_STATUS
    payload: string
}
export const saveTaskStatus = (taskStatus: string): SaveTaskStatusActionType => ({
    type: SAVE_TASK_STATUS,
    payload: taskStatus
})

type SaveTaskPriorityActionType = {
    type: typeof SAVE_TASK_PRIORITY
    payload: string
}
export const saveTaskPriority = (taskPriority: string): SaveTaskPriorityActionType => ({
    type: SAVE_TASK_PRIORITY,
    payload: taskPriority
})

type ClearTaskActionType = {
    type: typeof CLEAR_NEW_TASK
}
export const clearNewTask = (): ClearTaskActionType => ({
    type: CLEAR_NEW_TASK
})

type PatchTaskActionType = {
    type: typeof PATCH_TASK
    payload: Object
    key: string
    value: string
}
export const patchTask = (task: Object, key: string, value: string): PatchTaskActionType => ({
    type: PATCH_TASK, payload: task, key: key, value: value
})

