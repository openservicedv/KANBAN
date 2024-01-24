import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import Form from 'react-bootstrap/Form';

import {useDispatch} from "react-redux";
import {requestAllStatuses} from "../asyncActions/requestAllStatuses";

const CreateModal = ({statuses, priority, postTask}) => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false);
    const [newTask, setNewTask] = useState({});
    const toggle = () => setModal(!modal);

    const handleTaskName = (event) => {
        setNewTask({...newTask, name: event.target.value})
    }
    const handleTaskDescription = (event) => {
        setNewTask({...newTask, description: event.target.value})
    }
    const handleTaskStatus = (event) => {
        setNewTask({...newTask, status: event.target.value})
    }
    const handleTaskPriority = (event) => {
        setNewTask({...newTask, priority: event.target.value})
    }
    const handleSave = () => {
        if (newTask.name && newTask.description && newTask.status && newTask.priority) {
            console.log(newTask)
            postTask(newTask)
            toggle()
            setNewTask({})
        }
    }
    const handleCancel = () => {
        toggle()
        console.log(newTask)
        setNewTask({})
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Create Task
            </Button>

            <Button onClick={()=> dispatch(requestAllStatuses())}>
                request All Statuses
            </Button>

            {/*<Button onClick={()=> dispatch(getRequest())}>*/}
            {/*    getRequest*/}
            {/*</Button>*/}

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input placeholder="task name"
                               onChange={(event) => handleTaskName(event)}
                        />
                    </InputGroup>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input placeholder="task description"
                               onChange={(event) => handleTaskDescription(event)}
                        />
                    </InputGroup>
                    <Form.Select aria-label="Default select example"
                                 style={{marginBottom: "15px"}}
                                 onChange={(event) => handleTaskStatus(event)}
                    >
                        <option>Define status</option>
                        {statuses?.map(el => (
                            <option key={el._id} value={el.status}>{el.status}</option>
                        ))}
                    </Form.Select>
                    <Form.Select aria-label="Default select example"
                                 onChange={(event) => handleTaskPriority(event)}
                    >
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
