import axios from "axios";
import {asyncGetTasks} from "./asyncGetTasks";
export const asyncPatchTask = (newTask) => {
    // console.log(newTask)
    return function (dispatch) {
        axios.patch(`${process.env.REACT_APP_BASE_URL}/tasks/${newTask._id}`,
            {[newTask.key]: newTask[newTask.key]})
            .then(res => dispatch(asyncGetTasks()))
            .catch(err => {
                console.log(err)
            })
    }
}
