import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {clearNewTask, patchTask, saveTaskName, toggleEdit} from "../store/actions"
import {asyncPatchTask} from "../controllers/async/asyncPatchTask";

export const EditCard = () => {

    const dispatch = useDispatch();
    const newTask = useSelector(state => state.taskReducer.newTask)
    const isEditModalOpen = useSelector(state => state.toggleReducer.isEditModalOpen)

    const handleSaveEditModal = () => {
        dispatch(toggleEdit(!isEditModalOpen))
        dispatch(asyncPatchTask(newTask))
        dispatch(patchTask(newTask, "name", newTask.name))
    }
    const handleCancelEditModal = () => {
        dispatch(toggleEdit(!isEditModalOpen))
    }

    return (
        <div>
            <Modal isOpen={isEditModalOpen} toggle={() =>
                dispatch(toggleEdit(!isEditModalOpen))}>
                <ModalHeader toggle={() =>
                    dispatch(toggleEdit(!isEditModalOpen))}>
                    Edit card
                </ModalHeader>
                <ModalBody>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input
                            type="text"
                            value={newTask.name}
                            onChange={(event) =>
                                dispatch(saveTaskName(event.target.value))}/>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() =>
                        dispatch(() => handleSaveEditModal())}>
                        Save
                    </Button>{' '}
                    <Button color="danger" onClick={() =>
                        dispatch(() => handleCancelEditModal())}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
