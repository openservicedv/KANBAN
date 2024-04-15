import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {KanbanColumn} from "./components/KanbanColumn";
import {CreateModal} from "./components/CreateModal";
import {asyncGetStatuses} from "./controllers/async/asyncGetStatuses";
import {asyncGetTasks} from "./controllers/async/asyncGetTasks";
import {Button} from "reactstrap";
import {asyncReturnLost} from "./controllers/async/asyncReturnLost";
import {EditModal} from "./components/EditModal";

function App() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    const dispatch = useDispatch()
    const statuses = useSelector(state => state.statusReducer.statuses)
    const tasks = useSelector(state => state.taskReducer.tasks)

    useEffect(() => {
        dispatch(asyncGetStatuses())
        dispatch(asyncGetTasks())
    }, [dispatch]);

    return (
        <div className="App "
             style={{
                 // border: "DASHED GRAY 1PX",
             }}>
            <h1>Kanban Board</h1>
            <CreateModal
                isCreateModalOpen={isCreateModalOpen}
                setIsCreateModalOpen={setIsCreateModalOpen}
            />
            <EditModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
            />
            <div className="container text-center"
                 style={{
                     // border: "DASHED GRAY 2PX",
                 }}>
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
                            }}>
                        Find
                    </Button>
                    <Button color="danger"
                            onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
                            style={{
                                marginRight: "0",
                                width: "80px",
                                border: "solid red 1px",
                            }}>
                        Create
                    </Button>
                </div>
                <div className="row"
                     style={{
                         // border: "DASHED RED 1PX",
                     }}>
                    {statuses.map((el) => (
                        <KanbanColumn key={el._id}
                                      column={el}
                                      isEditModalOpen={isEditModalOpen}
                                      setIsEditModalOpen={setIsEditModalOpen}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default App;
