import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import Form from 'react-bootstrap/Form';

import {useDispatch, useSelector} from "react-redux";
import {asyncPostTask} from "../controllers/async/asyncPostTask";
import {clearNewTask, saveTaskName, saveTaskDescription, saveTaskPriority, saveTaskStatus} from "../store/actions";

export const CreateModal = ({isCreateModalOpen, setIsCreateModalOpen}) => {

    const dispatch = useDispatch()
    const statuses = useSelector(state => state.statusReducer.statuses)
    const priority = useSelector(state => state.statusReducer.priority)
    const newTask = useSelector(state => state.taskReducer.newTask)

    const handleSave = () => {
        if (newTask.name && newTask.description && newTask.status && newTask.priority) {
            dispatch(asyncPostTask(newTask))
            dispatch(clearNewTask({}))
            setIsCreateModalOpen(!isCreateModalOpen)
        }
    }
    const handleCancel = () => {
        dispatch(clearNewTask({}))
        setIsCreateModalOpen(!isCreateModalOpen)
    }

    return (
        <div>
            <Modal isOpen={isCreateModalOpen} toggle={() =>
                setIsCreateModalOpen(!isCreateModalOpen)}>
                <ModalHeader toggle={() =>
                    setIsCreateModalOpen(!isCreateModalOpen)}>
                    Create Task
                </ModalHeader>
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
                    <Button color="success" onClick={handleSave}>
                        Save
                    </Button>{' '}
                    <Button color="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
