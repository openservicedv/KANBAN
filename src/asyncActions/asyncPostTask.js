import axios from "axios";
import {asyncGetTasks} from "./asyncGetTasks";
const URL = process.env.REACT_APP_BASE_URL;

export const asyncPostTask = (newTask) => {
    return function (dispatch) {
        axios.post(`${URL}/tasks`, newTask)
            .then(res => dispatch(asyncGetTasks()))
            .catch(err => {
                console.log(err)
            })
    }
}
