import {patchTask} from "../../store/actions";
function delay() {
    return new Promise(resolve => setTimeout(resolve, 5000));
}

async function delayedLog() {
    await delay()
}

export async function asyncReturnLost(tasks, dispatch) {
    for (const item of tasks) {
        if (!(item.status === "todo"
            || item.status === "review"
            || item.status === "in progress"
            || item.status === "done")) {
            dispatch(patchTask(item, "status", "todo"))
            await delayedLog(item);
        }
    }
}
