import axios from "axios";
import {getTasks} from "../../store/actions";
import {TaskType} from "../../types";

export const asyncGetTasks = () => {
    return function (dispatch: any) {
        axios.get("https://expressjs-server.vercel.app/tasks")
            .then((res) => {
                const sortResData = res.data.sort((el1: TaskType, el2: TaskType)=>el1.priority < el2.priority ? 1 : -1)
                dispatch(getTasks(sortResData))
                console.log(sortResData)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
