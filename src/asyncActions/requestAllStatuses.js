import axios from "axios";
import {allStatuses} from "../store/actions";

export const requestAllStatuses = () => {
    return function (dispatch) {
        axios.get("https://expressjs-server.vercel.app/statuses")
            .then((res) => {
                console.log(res.data)
                dispatch(allStatuses(res.data))
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
