import axios from "axios";
import {getStatuses} from "../../store/actions";

export const asyncGetStatuses = () => {
    return function (dispatch: any) {
        axios.get("https://expressjs-server.vercel.app/statuses")
            .then((res) => {
                // console.log(res.data)
                dispatch(getStatuses(res.data))
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
