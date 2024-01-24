import axios from "axios";
import {requestAllStatuses} from "./requestAllStatuses";

export const requestTaskDelete = (taskId) => {
    return function (dispatch) {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${taskId}`)
            .then((res) => {
                console.log(res.data)
                dispatch(requestAllStatuses())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
