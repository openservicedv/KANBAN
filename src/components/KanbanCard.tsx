import React, {FC} from 'react';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from "react-redux";
// import {asyncDeleteTask} from "../controllers/async/asyncDeleteTask";
import {patchTaskAction, saveTaskIdAction, saveTaskNameAction} from "../store/actions";
import {TaskType} from "../types";
import {AppStateType} from "../store";

type PropsType = {
    task: TaskType
    // priority: string
    isEditModalOpen: boolean
    setIsEditModalOpen: (isEditModalOpen: boolean) => void
}
const KanbanCard: FC<PropsType> = ({task, isEditModalOpen, setIsEditModalOpen, }) => {

    const dispatch: any = useDispatch()
    const statuses = useSelector((state: AppStateType) => state.statusReducer.statuses)

    const handleEditModal = (task: TaskType) => {
        // console.log(task._id)
        setIsEditModalOpen(!isEditModalOpen)
        dispatch(saveTaskIdAction(task._id))
        dispatch(saveTaskNameAction(task.name))
    }

    const handlePatch = (task: TaskType, key: string, step: string) => {
        if (key === "status") {
            for (let i = 0; i < statuses.length; i++) {
                if (statuses[i].status === task.status) {
                    // @ts-ignore
                    dispatch(patchTaskAction(task, key, statuses[i + step].status))
                }
            }
        } else if (key === "priority") {
            dispatch(patchTaskAction(task, key, task.priority + step))
        } else if (key === "name") {
            dispatch(patchTaskAction(task, key, "hello!"))
        }
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="card"
             style={{
                 border: "solid gray 2px",
                 margin: "5px",
                 marginBottom: "10px",
                 borderRadius: "10px",
             }}>
            <div className="card-body d-flex flex-column justify-content-around"
                 style={{
                     // border: "DASHED GRAY 1PX",
                 }}>

                <div className="d-flex justify-content-between"
                     style={{
                         // border: "DASHED BLUE 1PX",
                         height: "50px",
                     }}>
                    <h5 className="card-title"
                        style={{
                            // border: "DASHED GRAY 1PX",
                            textAlign: "left"
                        }}>
                        {task.name}</h5>
                    <Button variant="warning"
                            onClick={() => handleEditModal(task)}
                            style={{
                                border: "solid yellow 1px",
                                height: "40px",
                                width: "80px",
                            }}>
                        Edit
                    </Button>
                </div>

                <p className="card-text"
                   style={{
                       // border: "solid gray 1px",
                       borderRadius: "5px",
                       // background: "lightgray",
                       height: "40px",
                       textAlign: "center",
                       // verticalAlign: "bottom",
                       padding: "10px"
                   }}>
                    {task.description}</p>

                <div className="d-flex justify-content-between align-items-center"
                     style={{
                         // border: "DASHED GRAY 1PX",
                         width: "200px",
                         height: "50px",
                         marginBottom: "5px"
                     }}>
                    <Button variant="outline-secondary"
                            // disabled={task.priority === priority[0]}
                            // onClick={() => handlePatch(task, "priority", -1)}
                    >
                        ↓
                    </Button>
                    <p className="card-text"
                       style={{
                           border: "solid gray 1px",
                           borderRadius: "5px",
                           background: "#F5DB95FF",
                           height: "30px",
                           textAlign: "center",
                           verticalAlign: "middle",
                           marginTop: "15px",
                           width: "110px",
                       }}>
                        priority: {task.priority}
                    </p>
                    <Button variant="outline-secondary"
                            // disabled={task.priority === priority[priority.length - 1]}
                            // onClick={() => handlePatch(task, "priority", 1)}
                    >
                        ↑
                    </Button>
                </div>
                <div className="d-flex justify-content-center"
                     style={{
                         // border: "DASHED GRAY 1PX",
                         width: "200px",
                     }}
                >
                    <Button
                        disabled={task.status === statuses[0].status}
                        variant="outline-secondary"
                        // onClick={() => handlePatch(task, "status", -1)}
                        style={{
                            marginRight: "7px",
                        }}
                    >
                        ←
                    </Button>
                    <Button variant="danger"
                            // onClick={() => dispatch(asyncDeleteTask(task._id))}
                            style={{
                                // marginRight: "10px",
                                border: "solid white 1px",
                                // height: "0px",
                                width: "80px",
                            }}
                    >
                        Delete
                    </Button>
                    <Button
                        disabled={task.status === statuses[statuses.length - 1].status}
                        variant="outline-secondary"
                        // onClick={() => handlePatch(task, "status", 1)}
                        style={{
                            marginLeft: "7px",
                        }}
                    >
                        →
                    </Button>

                    {/*<EditModal*/}
                    {/*    task={task}*/}
                    {/*/>*/}

                </div>
            </div>
        </div>
    );
};

export default KanbanCard;
