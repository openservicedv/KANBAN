import {GET_STATUSES} from "./statusReducer";
import {
    CLEAR_NEW_TASK, GET_TASKS, PATCH_TASK, SAVE_TASK_ID, SAVE_TASK_NAME,
    SAVE_TASK_DESCRIPTION, SAVE_TASK_PRIORITY, SAVE_TASK_STATUS
} from "./taskReducer";

type GetStatusesType = {
    type: typeof GET_STATUSES
    payload: Array<Object>
}
export const getStatuses = (statuses: Array<Object>): GetStatusesType => ({
    type: GET_STATUSES,
    payload: statuses
})

type GetTaskType = {
    type: typeof GET_TASKS
    payload: Array<Object>
}
export const getTasks = (tasks: Array<Object>): GetTaskType => ({
    type: GET_TASKS,
    payload: tasks
})

type SaveTaskIdType = {
    type: typeof SAVE_TASK_ID
    payload: string
}
export const saveTaskId = (taskId: string): SaveTaskIdType => ({
    type: SAVE_TASK_ID,
    payload: taskId
})

type SaveTaskNameType = {
    type: typeof SAVE_TASK_NAME
    payload: string
}
export const saveTaskName = (taskName: string): SaveTaskNameType => ({
    type: SAVE_TASK_NAME,
    payload: taskName
})

type SaveTaskDescriptionType = {
    type: typeof SAVE_TASK_DESCRIPTION
    payload: string
}
export const saveTaskDescription = (taskDescription: string): SaveTaskDescriptionType => ({
    type: SAVE_TASK_DESCRIPTION,
    payload: taskDescription
})

type SaveTaskStatusType = {
    type: typeof SAVE_TASK_STATUS
    payload: string
}
export const saveTaskStatus = (taskStatus: string): SaveTaskStatusType => ({
    type: SAVE_TASK_STATUS,
    payload: taskStatus
})

type SaveTaskPriorityType = {
    type: typeof SAVE_TASK_PRIORITY
    payload: number
}
export const saveTaskPriority = (taskPriority: number): SaveTaskPriorityType => ({
    type: SAVE_TASK_PRIORITY,
    payload: taskPriority
})

type ClearTaskType = {
    type: typeof CLEAR_NEW_TASK
}
export const clearNewTask = (): ClearTaskType => ({
    type: CLEAR_NEW_TASK
})

type PatchTaskType = {
    type: typeof PATCH_TASK
    payload: Object
    key: string
    value: string
}
export const patchTask = (task: Object, key: string, value: string): PatchTaskType => ({
    type: PATCH_TASK, payload: task, key: key, value: value
})

