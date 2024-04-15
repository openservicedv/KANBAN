import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {patchTask, saveTaskName, toggleEdit} from "../store/actions"
import {asyncPatchTask} from "../controllers/async/asyncPatchTask";

export const EditCard = () => {
    const [taskName, setTaskName] = useState("")
    const dispatch = useDispatch();
    const newTask = useSelector(state => state.taskReducer.newTask)
    const isEditModalOpen = useSelector(state => state.toggleReducer.isEditModalOpen)

    return (
        <Modal isOpen={isEditModalOpen}
               toggle={() => dispatch(toggleEdit())}>
            <ModalHeader toggle={() => dispatch(toggleEdit())}>
                Edit card
            </ModalHeader>
            <ModalBody>
                <InputGroup style={{marginBottom: "15px"}}>
                    <Input
                        type="text"
                        value={taskName}
                        onChange={(event) =>
                            setTaskName(event.target.value)
                        }/>
                </InputGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success"
                        onClick={
                            () => {
                                dispatch(saveTaskName(taskName))
                                dispatch(asyncPatchTask(newTask))
                                dispatch(patchTask(newTask, "name", newTask.name))
                                dispatch(toggleEdit())
                            }
                        }>
                    Save
                </Button>{' '}
                <Button color="danger"
                        onClick={
                            () => dispatch(toggleEdit())
                        }>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};
