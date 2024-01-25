import axios from "axios";
import {asyncGetStatuses} from "./asyncGetStatuses";

export const asyncDeleteTask = (taskId) => {
    return function (dispatch) {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${taskId}`)
            .then((res) => {
                console.log(res.data)
                dispatch(asyncGetStatuses())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
