import axios from "axios";
import {allTasks} from "../store/actions";

export const requestAllTasks = () => {
    return function (dispatch) {
        axios.get("https://expressjs-server.vercel.app/tasks")
            .then((res) => {
                console.log(res.data)
                dispatch(allTasks(res.data))
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
