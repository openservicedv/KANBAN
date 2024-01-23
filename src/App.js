import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import KanbanColumn from "./components/KanbanColumn";
import CreateModal from "./components/CreateModal";

function App() {
    const [tasks, setTasks] = useState([])
    const [statuses, setStatuses] = useState([])
    const priority = Array(10).fill(0).map((el, index) => index)
    const getStatuses = () => {
        axios
            .get("https://expressjs-server.vercel.app/statuses")
            .then((res) => {
                setStatuses(res.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const getTasks = () => {
        axios
            .get("https://expressjs-server.vercel.app/tasks")
            .then((res) => {
                setTasks(res.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const postTask = (newTask) => {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => getTasks())
            .catch(err => alert("Something went wrong, try again later"))
    }

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then(res => getTasks())
            .catch(err => alert("Something went wrong, try again later"))
    }

    useEffect(() => {
        getStatuses()
        getTasks()
        // console.log(priority)
    }, []);

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
                statuses={statuses}
                priority={priority}
                postTask={postTask}
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
                    {statuses.map((el) => (
                        <KanbanColumn
                            key={el._id}
                            column={el}
                            tasks={tasks}
                            statuses={statuses}
                            deleteTask={deleteTask}
                        />))}
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
