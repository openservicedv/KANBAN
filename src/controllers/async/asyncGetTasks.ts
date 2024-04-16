import axios, {AxiosResponse} from "axios";
import {getTasksAction} from "../../store/actions";
import {TaskType} from "../../types";

export const asyncGetTasks = () => {
    return function (dispatch: any): void {
        axios.get("https://expressjs-server.vercel.app/tasks")
            .then((res: AxiosResponse<any, any>): void => {
                const sortResData = res.data.sort((el1: TaskType, el2: TaskType) => el1.priority < el2.priority ? 1 : -1)
                dispatch(getTasksAction(sortResData))
                console.log(sortResData)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
