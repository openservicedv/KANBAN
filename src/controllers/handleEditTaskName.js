import {saveTaskName, toggleEdit} from "../store/actions";

export const handleEditTaskName = (task, dispatch, editModal) => {
    dispatch(toggleEdit(!editModal))
    dispatch(saveTaskName(task.name))
};
