import axios from "axios";
import {asyncGetTasks} from "./asyncGetTasks";
export const asyncPatchTask = (updatedTask) => {
    return function (dispatch) {
        axios.patch(`${process.env.REACT_APP_BASE_URL}/tasks/${updatedTask._id}`, {[updatedTask.key]: updatedTask[updatedTask.key]})
            .then(res => dispatch(asyncGetTasks()))
            .catch(err => {
                console.log(err)
            })
    }
}
