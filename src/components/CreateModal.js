import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import Form from 'react-bootstrap/Form';

import {useDispatch, useSelector} from "react-redux";
import {asyncPostTask} from "../asyncActions/asyncPostTask";
import {
    patchTask, clearNewTask,
    saveTaskName, saveTaskDescription, saveTaskPriority, saveTaskStatus,
    toggle
} from "../store/actions";

const CreateModal = ({priority}) => {
    const statuses = useSelector(state => state.statusReducer.statuses)
    const tasks = useSelector(state => state.taskReducer.tasks)
    const newTask = useSelector(state => state.taskReducer.newTask)
    const modal = useSelector(state => state.modalReducer.modal)
    const dispatch = useDispatch()

    const handleSave = () => {
        if (newTask.name && newTask.description && newTask.status && newTask.priority) {
            dispatch(asyncPostTask(newTask))
            dispatch(clearNewTask({}))
            dispatch(toggle(!modal))
        }
    }
    const handleCancel = () => {
        dispatch(clearNewTask({}))
        dispatch(toggle(!modal))
    }
    const returnLost = () => {
        for (let i = 0; i < tasks.length; i++) {
            if (!(tasks[i].status === "todo" || tasks[i].status === "review" || tasks[i].status === "in progress" || tasks[i].status === "done")) {
                dispatch(patchTask(tasks[i], "status", "todo"))
                console.log(tasks[i])
            }
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between"
                 style={{
                     border: "dashed blue",
                     // width: "600px",
                     // marginBottom: "5px",

                 }}>
                <Button color="warning"
                        onClick={() => returnLost()}
                >Return all lost tasks
                </Button>
                <Button color="danger"
                        onClick={() => dispatch(toggle(!modal))}
                >Create Task
                </Button>
            </div>
            <Modal isOpen={modal} toggle={() => dispatch(toggle(!modal))}>
                <ModalHeader toggle={() => dispatch(toggle(!modal))}>Create Task</ModalHeader>
                <ModalBody>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input placeholder="task name"
                               onChange={(event) =>
                                   dispatch(saveTaskName(event.target.value))}/>
                    </InputGroup>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input placeholder="task description"
                               onChange={(event) =>
                                   dispatch(saveTaskDescription(event.target.value))}/>
                    </InputGroup>
                    <Form.Select aria-label="Default select example"
                                 style={{marginBottom: "15px"}}
                                 onChange={(event) =>
                                     dispatch(saveTaskStatus(event.target.value))}>
                        <option>Define status</option>
                        {statuses?.map(el => (
                            <option key={el._id} value={el.status}>{el.status}</option>
                        ))}
                    </Form.Select>
                    <Form.Select aria-label="Default select example"
                                 onChange={(event) =>
                                     dispatch(saveTaskPriority(event.target.value))}>
                        <option>Define priority</option>
                        {priority.map((el, idx) => (
                            <option key={idx} value={el}>{el}</option>
                        ))}
                    </Form.Select>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>
                        Save
                    </Button>{' '}
                    <Button color="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default CreateModal;
