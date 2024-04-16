import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {KanbanColumn} from "./components/KanbanColumn";
import {CreateModal} from "./components/CreateModal";
import {asyncGetStatuses} from "./controllers/async/asyncGetStatuses";
import {asyncGetTasks} from "./controllers/async/asyncGetTasks";
import {Button} from "reactstrap";
import {EditModal} from "./components/EditModal";
import {AppStateType} from "./store";
import React from 'react';

function App() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    const dispatch = useDispatch()
    const statuses = useSelector((state: AppStateType) => state.statusReducer.statuses)

    useEffect(() => {
        // @ts-ignore
        dispatch(asyncGetStatuses())
        // @ts-ignore
        dispatch(asyncGetTasks())
    }, [dispatch]);

    return (
        <div className="App ">
            <h1>Kanban Board</h1>
            <CreateModal
                isCreateModalOpen={isCreateModalOpen}
                setIsCreateModalOpen={setIsCreateModalOpen}/>
            <EditModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}/>
            <div className="container text-center">
                <div className="d-flex justify-content-end">
                    <Button color="danger"
                            onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}>
                        Create
                    </Button>
                </div>
                <div className="row">
                    {statuses.map((el) => (
                        <KanbanColumn key={el._id}
                                      column={el}
                                      isEditModalOpen={isEditModalOpen}
                                      setIsEditModalOpen={setIsEditModalOpen}/>))}
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
