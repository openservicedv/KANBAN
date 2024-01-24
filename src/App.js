import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useEffect} from "react";
import KanbanColumn from "./components/KanbanColumn";
import CreateModal from "./components/CreateModal";
import {useDispatch, useSelector} from "react-redux";
import {requestAllTasks} from "./asyncActions/requestAllTasks";
import {requestAllStatuses} from "./asyncActions/requestAllStatuses";

function App() {
    const dispatch = useDispatch()

    dispatch(requestAllStatuses())
    dispatch(requestAllTasks())

    const tasks = useSelector(state => state.tasks)
    const statuses = useSelector(state => state.statuses)
    const priority = Array(10).fill(0).map((el, index) => index)
    // const getStatuses = () => {
    //     axios
    //         .get("https://expressjs-server.vercel.app/statuses")
    //         .then((res) => {
    //             // setStatuses(res.data)
    //             console.log(res.data)
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })
    // }
    //
    // const getTasks = () => {
    //     axios
    //         .get("https://expressjs-server.vercel.app/tasks")
    //         .then((res) => {
    //             // setTasks(res.data)
    //             console.log(res.data)
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })
    // }


//todo
    // const postTask = (newTask) => {
    //     axios.post('https://expressjs-server.vercel.app/tasks', newTask)
    //         .then(res => getTasks())
    //         .catch(err => alert("Something went wrong, try again later"))
    // }


    // const deleteTask = (id) => {
    //     axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
    //         .then(res => getTasks())
    //         .catch(err => alert("Something went wrong, try again later"))
    // }

    return (
        <div className="App"
             style={{
                 border: "dashed black",
                 margin: "5px",
                 padding: "5px",
             }}
        >
            <h1>Kanban Board</h1>
            <CreateModal
                priority={priority}
            />
            <div className="container text-center"
                 style={{
                     border: "dashed black 3px",
                     margin: "5px",
                     padding: "5px",
                     width: "1200px",

                 }}
            >
                <div className="row align-items-start"
                     style={{
                         border: "solid gray",
                         background: "lightyellow",
                         // margin: "5px",
                         // padding: "5px",

                     }}
                >
                    {statuses?.map((el) => (
                        <KanbanColumn
                            key={el._id}
                            column={el}
                            tasks={tasks}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default App;
