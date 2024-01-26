import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KanbanColumn from "./components/KanbanColumn";
import CreateCard from "./components/CreateCard";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetTasks} from "./asyncActions/asyncGetTasks";
import {asyncGetStatuses} from "./asyncActions/asyncGetStatuses";
import {asyncPatchTask} from "./asyncActions/asyncPatchTask";
import {EditCard} from "./components/EditCard";

function App() {
    const dispatch = useDispatch()
    const statuses = useSelector(state => state.statusReducer.statuses)
    const updatedTask = useSelector(state => state.cardReducer.updatedTask)
    const priority = Array(10).fill(0).map((el, index) => index)

    useEffect(() => {
        dispatch(asyncGetStatuses())
        dispatch(asyncGetTasks())
        if ((Object.keys(updatedTask).length !== 0)) {
            dispatch(asyncPatchTask(updatedTask))
        }
    }, [dispatch, updatedTask]);

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
            <EditCard
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
