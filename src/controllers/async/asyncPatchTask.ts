// import axios from "axios";
// import {asyncGetTasks} from "./asyncGetTasks";
import {TaskType} from "../../types";
export const asyncPatchTask = (newTask: TaskType) => {
    // console.log(newTask)
    return function (dispatch: any) {
        // axios.patch(`${process.env.REACT_APP_BASE_URL}/tasks/${newTask._id}`,
        //     {[newTask.key]: newTask[newTask.key]})
        //     .then(res => dispatch(asyncGetTasks()))
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
}
