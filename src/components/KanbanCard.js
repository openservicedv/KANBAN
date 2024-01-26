import React from 'react';
import Button from 'react-bootstrap/Button';

import {useDispatch, useSelector} from "react-redux";
import {asyncDeleteTask} from "../controllers/async/asyncDeleteTask";
import {patchTask} from "../store/actions";
import {handleEditTaskName} from "../controllers/handleEditTaskName";
import {EditCard} from "./EditCard";

const KanbanCard = ({task, priority}) => {
    const dispatch = useDispatch()
    const statuses = useSelector(state => state.statusReducer.statuses)
    const editModal = useSelector(state => state.cardReducer.editModal)

    const handlePatch = (task, key, step) => {
        // console.log(task.status)
        if (key === "status") {
            for (let i = 0; i < statuses.length; i++) {
                if (statuses[i].status === task.status) {
                    dispatch(patchTask(task, key, statuses[i + step].status))
                }
            }
        } else if (key === "priority") {
            dispatch(patchTask(task, key, task.priority + step))
        }
    }

    return (
        <div className="card"
             style={{
                 border: "solid"
             }}>
            <div className="card-body"
                 style={{
                     // border: "brown solid",
                     // background: "lightgray",
                     // marginBottom: "10px",
                     height: "300px",
                     width: "273px",
                 }}>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed blue",
                         width: "243px",
                         marginBottom: "5px",
                     }}>
                    <h5 className="card-title"
                        style={{
                            border: "solid red",

                        }}>{task.name}</h5>
                    <Button variant="outline-secondary"
                            onClick={() => handleEditTaskName(task, dispatch, editModal)}
                    >
                        Edit
                    </Button>
                    <EditCard
                        task={task}
                    />
                </div>
                <p className="card-text"
                   style={{
                       border: "solid green",

                   }}>{task.description}</p>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed green",
                         marginBottom: "5px",
                     }}
                >
                    <p className="card-text"
                       style={{
                           border: "solid blue",

                       }}>priority: {task.priority}
                    </p>
                    <Button variant="outline-secondary"
                            disabled={task.priority === priority[0]}
                            onClick={() => handlePatch(task, "priority", -1)}
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
                         border: "dashed red",
                     }}
                >
                    <Button
                        disabled={task.status === statuses[0].status}
                        variant="outline-secondary"
                        onClick={() => handlePatch(task, "status", -1)}
                    >
                        ←
                    </Button>
                    <Button variant="outline-secondary"
                            onClick={() => dispatch(asyncDeleteTask(task._id))}
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
                </div>
            </div>
        </div>
    );
};

export default KanbanCard;
