import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {patchTask, saveTaskName} from "../store/actions"
import {asyncPatchTask} from "../controllers/async/asyncPatchTask";

export const EditModal = ({isEditModalOpen, setIsEditModalOpen}) => {

    const dispatch = useDispatch();
    const newTask = useSelector(state => state.taskReducer.newTask)

    return (
        <Modal isOpen={isEditModalOpen}
               toggle={() => setIsEditModalOpen(!isEditModalOpen)}>
            <ModalHeader toggle={() => setIsEditModalOpen(!isEditModalOpen)}>
                Edit card
            </ModalHeader>
            <ModalBody>
                <InputGroup style={{marginBottom: "15px"}}>
                    <Input
                        type="text"
                        value={newTask.name}
                        onChange={(event) =>
                            dispatch(saveTaskName(event.target.value))
                        }/>
                </InputGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success"
                        onClick={
                            () => {
                                dispatch(patchTask(newTask, "name", newTask.name))
                                dispatch(asyncPatchTask(newTask))
                                setIsEditModalOpen(!isEditModalOpen)
                            }
                        }>
                    Save
                </Button>{' '}
                <Button color="danger"
                        onClick={
                            () => setIsEditModalOpen(!isEditModalOpen)
                        }>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};
