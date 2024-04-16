import axios, {AxiosResponse} from "axios";
import {getStatusesAction} from "../../store/actions";

export const asyncGetStatuses = () => {
    return function (dispatch: any): void {
        axios.get("https://expressjs-server.vercel.app/statuses")
            .then((res: AxiosResponse<any, any>): void => {
                dispatch(getStatusesAction(res.data))
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
