import axios from "axios";
import {asyncGetStatuses} from "./asyncGetStatuses";

export const asyncPostTask = (newTask) => {
    return function (dispatch) {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => dispatch(asyncGetStatuses()))
            .catch(err => {
                console.log(err)
            })
    }
}
