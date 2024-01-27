import axios from "axios";
import {getTasks} from "../../store/actions";

export const asyncGetTasks = () => {
    return function (dispatch) {
        axios.get("https://expressjs-server.vercel.app/tasks")
            .then((res) => {
                const sortResData = res.data.sort((el1, el2)=>el1.priority < el2.priority ? 1 : -1)
                dispatch(getTasks(sortResData))
                console.log(sortResData)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
