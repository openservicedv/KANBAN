import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {KanbanColumn} from "./components/KanbanColumn";
import {CreateCard} from "./components/CreateCard";
import {asyncGetStatuses} from "./controllers/async/asyncGetStatuses";
import {asyncGetTasks} from "./controllers/async/asyncGetTasks";
import {asyncPatchTask} from "./controllers/async/asyncPatchTask";
import {Button} from "reactstrap";
import {asyncReturnLost} from "./controllers/async/asyncReturnLost";
import {toggleCreate} from "./store/actions";
import {EditCard} from "./components/EditCard";

function App() {

    // const priority = Array(10).fill(0).map((el, index) => index)
    const dispatch = useDispatch()
    const statuses = useSelector(state => state.statusReducer.statuses)
    const newTask = useSelector(state => state.taskReducer.newTask)
    const tasks = useSelector(state => state.taskReducer.tasks)
    const isCreateModalOpen = useSelector(state => state.toggleReducer.isCreateModalOpen)

    useEffect(() => {
        dispatch(asyncGetStatuses())
        dispatch(asyncGetTasks())
    }, [dispatch]);

    useEffect(() => {
        if ((Object.keys(newTask).length !== 0)) {
            dispatch(asyncPatchTask(newTask))
        }
    }, [dispatch, newTask]);

    return (
        <div className="App "
             style={{
                 // border: "DASHED GRAY 1PX",
             }}
        >
            <h1>Kanban Board</h1>
            <CreateCard
                // priority={priority}
            />
            <EditCard
            />
            <div className="container text-center"
                 style={{
                     // border: "DASHED GRAY 2PX",
                 }}
            >
                <div className="d-flex justify-content-end"
                     style={{
                         // border: "DASHED GRAY 1PX",
                         marginBottom: "10px",
                     }}>
                    <Button color="warning"
                            onClick={() => asyncReturnLost(tasks, dispatch)}
                            style={{
                                marginRight: "10px",
                                width: "80px",
                                border: "solid yellow 1px",
                            }}
                    >Find
                    </Button>
                    <Button color="danger"
                            onClick={() => dispatch(toggleCreate(!isCreateModalOpen))}
                            style={{
                                marginRight: "0",
                                width: "80px",
                                border: "solid red 1px",
                            }}
                    >Create
                    </Button>
                </div>
                <div className="row"
                     style={{
                         // border: "DASHED RED 1PX",
                     }}
                >
                    {statuses.map((el) => (
                        <KanbanColumn key={el._id}
                                      column={el}
                                      // priority={priority}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default App;
