import axios from "axios";
import {asyncGetTasks} from "./asyncGetTasks";

export const asyncPostTask = (newTask) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_BASE_URL}/tasks`, newTask)
            .then(res => dispatch(asyncGetTasks()))
            .catch(err => {
                console.log(err)
            })
    }
}
