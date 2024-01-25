import axios from "axios";
import {getTasks} from "../store/actions";

export const asyncGetTasks = (dispatch) => {
    return function (dispatch) {
        axios.get("https://expressjs-server.vercel.app/tasks")
            .then((res) => {
                console.log(res.data)
                return dispatch(getTasks(res.data))
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
