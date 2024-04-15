import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import {asyncPostTask} from "../controllers/async/asyncPostTask";
import {clearNewTask, saveTaskName, saveTaskDescription, saveTaskPriority, saveTaskStatus} from "../store/actions";
import {StatusType, TaskType, Priority as priority} from "../types";
import {AppStateType} from "../store";

type PropsType = {
    isCreateModalOpen: boolean
    setIsCreateModalOpen: (isCreateModalOpen: boolean) => void
}

export const CreateModal: React.FC<PropsType> = ({isCreateModalOpen, setIsCreateModalOpen}) => {

    const dispatch: any = useDispatch()
    const statuses: StatusType[] = useSelector((state: AppStateType) => state.statusReducer.statuses)
    const newTask: TaskType = useSelector((state: AppStateType) => state.taskReducer.newTask)

    console.log(statuses)
    console.log(useSelector((state: any) => state.statusReducer))
    console.log(priority)

    const handleSave = () => {
        if (newTask.name && newTask.description && newTask.status && newTask.priority) {
            dispatch(asyncPostTask(newTask))
            dispatch(clearNewTask())
            setIsCreateModalOpen(!isCreateModalOpen)
        }
    }
    const handleCancel = () => {
        dispatch(clearNewTask())
        setIsCreateModalOpen(!isCreateModalOpen)
    }

    return (
        <div>
            <Modal isOpen={isCreateModalOpen} toggle={() => setIsCreateModalOpen(!isCreateModalOpen)}>
                <ModalHeader toggle={() => setIsCreateModalOpen(!isCreateModalOpen)}>
                    Create Task</ModalHeader>
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
                    <Form.Select aria-label="Default1"
                                 style={{marginBottom: "15px"}}
                                 onChange={(event) =>
                                     dispatch(saveTaskStatus(event.target.value))}>
                        <option>Define status</option>
                        {statuses?.map((el: StatusType) => (
                            <option key={el._id} value={el.status}>{el.status}</option>
                        ))}
                    </Form.Select>
                    <Form.Select aria-label="Default2"
                                 onChange={(event) =>
                                     dispatch(saveTaskPriority(event.target.value))}>
                        <option>Define priority</option>
                        {priority?.map((el: number, idx: number) => (
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
