const defaultState = {
    tasks: [],
}
export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "getTasks":
            return {...state, tasks: [...action.payload]}
        default:
            return state;
    }
}





// const postTask = (newTask) => {
//     axios.post('tasks', newTask)
//         .then(res => getTasks())
//         .catch(err => alert("Something went wrong, try again later"))
// }

// const deleteTask = (id) => {
//     axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
//         .then(res => getTasks())
//         .catch(err => alert("Something went wrong, try again later"))
// }
