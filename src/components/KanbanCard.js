import React from 'react';
import Button from 'react-bootstrap/Button';

import {useDispatch, useSelector} from "react-redux";
import {asyncDeleteTask} from "../controllers/async/asyncDeleteTask";
import {patchTask, saveTaskId, saveTaskName, toggleEdit} from "../store/actions";
import {EditCard} from "./EditCard";

const KanbanCard = ({task, priority}) => {

    const dispatch = useDispatch()
    const statuses = useSelector(state => state.statusReducer.statuses)
    const isEditModalOpen = useSelector(state => state.toggleReducer.isEditModalOpen)

    const handleEditModal = (task) => {
        console.log(task._id)
        dispatch(toggleEdit(!isEditModalOpen))
        dispatch(saveTaskId(task._id))
        dispatch(saveTaskName(task.name))
    }

    const handlePatch = (task, key, step) => {
        if (key === "status") {
            for (let i = 0; i < statuses.length; i++) {
                if (statuses[i].status === task.status) {
                    dispatch(patchTask(task, key, statuses[i + step].status))
                }
            }
        } else if (key === "priority") {
            dispatch(patchTask(task, key, task.priority + step))
        } else if (key === "name") {
            dispatch(patchTask(task, key, "hello!"))
        }
    }

    return (
        <div className="card"
             style={{
                 border: "solid gray 1px",
                 margin: "5px",
                 borderRadius: "10px",
                 // background: "#D6E0F5FF",
             }}>
            <div className="card-body d-flex flex-column justify-content-between"
                 style={{
                     // border: "brown solid",
                     // background: "lightgray",
                     // marginBottom: "10px",
                     height: "260px",
                     width: "273px",
                 }}>
                <div className="d-flex justify-content-between"
                     style={{
                         // border: "dashed blue",
                         height: "70px",
                         width: "243px",
                         marginBottom: "5px",
                     }}>
                    <h5 className="card-title"
                        style={{
                            // border: "solid red",
                            width: "165px",
                            textAlign: "left"
                        }}>
                        {task.name}</h5>
                    <Button variant="warning"
                            onClick={() => handleEditModal(task)}
                            style={{
                                border: "solid gray 1px",
                                height: "40px",
                                width: "70px",
                            }}>
                        Edit
                    </Button>
                </div>
                <p className="card-text"
                   style={{
                       border: "solid gray",
                       borderRadius: "30px",
                       background: "#F5DB95FF",
                       height: "55px",
                       textAlign: "center",
                       verticalAlign: "bottom",
                   }}>
                    {task.description}</p>
                <div className="d-flex justify-content-start align-items-center"
                     style={{
                         // border: "dashed green",
                         marginBottom: "5px",
                     }}>
                    <p className="card-text"
                       style={{
                           // border: "solid blue",
                           marginRight: "10px",
                       }}>
                        priority: {task.priority}
                    </p>
                    <Button variant="outline-secondary"
                            disabled={task.priority === priority[0]}
                            onClick={() => handlePatch(task, "priority", -1)}
                            style={{
                                marginRight: "5px",
                            }}
                    >
                        ↓
                    </Button>
                    <Button variant="outline-secondary"
                            disabled={task.priority === priority[priority.length - 1]}
                            onClick={() => handlePatch(task, "priority", 1)}
                    >
                        ↑
                    </Button>
                </div>
                <div className="d-flex justify-content-start"
                     style={{
                         // border: "dashed red",
                     }}
                >
                    <Button
                        disabled={task.status === statuses[0].status}
                        variant="outline-secondary"
                        onClick={() => handlePatch(task, "status", -1)}
                        style={{
                            marginRight: "5px",
                        }}
                    >
                        ←
                    </Button>
                    <Button variant="danger"
                            onClick={() => dispatch(asyncDeleteTask(task._id))}
                            style={{
                                marginRight: "5px",
                            }}
                    >
                        Delete
                    </Button>
                    <Button
                        disabled={task.status === statuses[statuses.length - 1].status}
                        variant="outline-secondary"
                        onClick={() => handlePatch(task, "status", 1)}
                    >
                        →
                    </Button>
                    <EditCard
                        task={task}
                    />
                </div>
            </div>
        </div>
    );
};

export default KanbanCard;
