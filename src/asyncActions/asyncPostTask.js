import axios from "axios";
import {asyncGetTasks} from "./asyncGetTasks";

export const asyncPostTask = (newTask) => {
    return function (dispatch) {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => dispatch(asyncGetTasks()))
            .catch(err => {
                console.log(err)
            })
    }
}
