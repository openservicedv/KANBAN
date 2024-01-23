import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Column from "./components/Column";
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
    const postTasks = (newTask) => {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res => getTasks())
            .catch(err => alert("Something went wrong, try again later"))
    }

    useEffect(() => {
        getStatuses()
        getTasks()
        // console.log(priority)
    }, []);

    return (
        <div className="App">
            <h1>Kanban Board</h1>
            <CreateModal
                statuses={statuses}
                priority={priority}
                postTasks={postTasks}
            />
            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map((el) => (
                        <Column
                            key={el._id}
                            column={el}
                            tasks={tasks}
                            statuses={statuses}
                        />))}
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
