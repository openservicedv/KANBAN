import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {KanbanColumn} from "./components/KanbanColumn";
import {CreateCard} from "./components/CreateCard";
import {asyncGetStatuses} from "./controllers/async/asyncGetStatuses";
import {asyncGetTasks} from "./controllers/async/asyncGetTasks";
import {asyncPatchTask} from "./controllers/async/asyncPatchTask";

function App() {
    const dispatch = useDispatch()
    const statuses = useSelector(state => state.statusReducer.statuses)
    const newTask = useSelector(state => state.taskReducer.newTask)
    const priority = Array(10).fill(0).map((el, index) => index)

    useEffect(() => {
        dispatch(asyncGetStatuses())
        dispatch(asyncGetTasks())
    }, [dispatch]);

    useEffect(() => {
        if ((Object.keys(newTask).length !== 0)) {
            dispatch(asyncPatchTask(newTask))
            console.log("сработал asyncPatchTask")
        }
    }, [dispatch, newTask]);

    return (
        <div className="App"
             style={{
                 border: "dashed black",
                 margin: "5px",
                 padding: "5px",
                 width: "1240px",
             }}
        >
            <h1>Kanban Board</h1>
            <CreateCard
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
                    {statuses.map((el) => (
                        <KanbanColumn key={el._id}
                                      column={el}
                                      priority={priority}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default App;
