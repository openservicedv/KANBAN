import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {saveTaskName, toggleEdit} from "../store/actions"

export const EditCard = ({task}) => {

    const dispatch = useDispatch();
    const editModal = useSelector(state => state.cardReducer.editModal)
    const taskName = useSelector(state => state.taskReducer.newTask.name)

    return (
        <div>
            <Modal isOpen={editModal} toggle={() =>
                dispatch(toggleEdit(!editModal))}>
                <ModalHeader toggle={() =>
                    dispatch(toggleEdit(!editModal))}>
                    Edit card
                </ModalHeader>
                <ModalBody>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input
                            type="text"
                            value={taskName}
                            onChange={(event) =>
                                dispatch(saveTaskName(event.target.value))}/>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() =>
                        dispatch(toggleEdit(!editModal))}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={() =>
                        dispatch(toggleEdit(!editModal))}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
