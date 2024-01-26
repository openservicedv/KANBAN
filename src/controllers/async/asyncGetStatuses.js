import axios from "axios";
import {getStatuses} from "../../store/actions";

export const asyncGetStatuses = () => {
    return function (dispatch) {
        axios.get("https://expressjs-server.vercel.app/statuses")
            .then((res) => {
                // console.log(res.data)
                dispatch(getStatuses(res.data))
            })
            .catch((e) => {
                console.log(e)
            })
    }
}
