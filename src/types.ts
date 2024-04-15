export const Priority = Array(10).fill(0).map((el, index) => index)
export const GET_STATUSES = "getStatuses"
export const GET_TASKS = "getTasks"
export const SAVE_TASK_ID = "saveTaskId"
export const SAVE_TASK_NAME = "saveTaskName"
export const SAVE_TASK_DESCRIPTION = "saveTaskDescription"
export const SAVE_TASK_STATUS = "saveTaskStatus"
export const SAVE_TASK_PRIORITY = "saveTaskPriority"
export const CLEAR_NEW_TASK = "clearNewTask"
export const PATCH_TASK = "patchTask"

export type TaskType = {
    _id?: string
    name: string
    description: string
    priority: string
    status: string
}

export type StatusType = {
    _id: string
    title: string
    status: string
}

