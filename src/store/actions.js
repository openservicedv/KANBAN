import {TOGGLE_CREATE, TOGGLE_EDIT} from "./toggleReducer";

export const getStatuses = (payload) => ({type: "getStatuses", payload: payload})
export const getTasks = (payload) => ({type: "getTasks", payload: payload})
export const saveTaskId = (payload) => ({type: "saveTaskId", payload: payload})
export const saveTaskName = (payload) => ({type: "saveTaskName", payload: payload})
export const saveTaskDescription = (payload) => ({type: "saveTaskDescription", payload: payload})
export const saveTaskStatus = (payload) => ({type: "saveTaskStatus", payload: payload})
export const saveTaskPriority = (payload) => ({type: "saveTaskPriority", payload: payload})
export const clearNewTask = (payload) => ({type: "clearNewTask", payload: payload})
export const toggleCreate = () => ({type: TOGGLE_CREATE})
export const toggleEdit = () => ({type: TOGGLE_EDIT})
export const patchTask = (payload, key, value) => ({type: "patchTask", payload: payload, key: key, value: value})

