import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KanbanColumn from "./components/KanbanColumn";
import CreateModal from "./components/CreateModal";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetTasks} from "./asyncActions/asyncGetTasks";
import {asyncGetStatuses} from "./asyncActions/asyncGetStatuses";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.taskReducer.tasks)
    const statuses = useSelector(state => state.statusReducer.statuses)
    const priority = Array(10).fill(0).map((el, index) => index)

    useEffect( () => {
        dispatch(asyncGetStatuses())
        dispatch(asyncGetTasks())
    }, [dispatch]);

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
                    {statuses.map((el) => (
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
