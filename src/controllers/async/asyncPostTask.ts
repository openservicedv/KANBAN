import axios from "axios";
import {asyncGetTasks} from "./asyncGetTasks";
import {TaskType} from "../../types";

export const asyncPostTask = (newTask: TaskType) => {
    return function (dispatch: any) {
        axios.post(`${process.env.REACT_APP_BASE_URL}/tasks`, newTask)
            .then(res => dispatch(asyncGetTasks()))
            .catch(err => {
                console.log(err)
            })
    }
}
