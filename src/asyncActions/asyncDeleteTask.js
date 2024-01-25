import axios from "axios";
import {asyncGetTasks} from "./asyncGetTasks";

export const asyncDeleteTask = (taskId) => {
    return function (dispatch) {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${taskId}`)
            .then((res) => {
                console.log(res.data)
                dispatch(asyncGetTasks())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
