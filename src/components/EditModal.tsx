import React, {FC} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {patchTaskAction, saveTaskNameAction} from "../store/actions"
import {asyncPatchTask} from "../controllers/async/asyncPatchTask";
import {AppStateType} from "../store";
import {TaskType} from "../types";

type PropsType = {
    isEditModalOpen: boolean
    setIsEditModalOpen: (isEditModalOpen: boolean) => void
}
export const EditModal: FC<PropsType> = ({isEditModalOpen, setIsEditModalOpen}) => {

    const dispatch = useDispatch();
    const newTask: TaskType = useSelector((state: AppStateType) => state.taskReducer.newTask)

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
                            dispatch(saveTaskNameAction(event.target.value))
                        }/>
                </InputGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success"
                        onClick={
                            () => {
                                dispatch(patchTaskAction(newTask, "name", newTask.name))
                                // @ts-ignore
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
