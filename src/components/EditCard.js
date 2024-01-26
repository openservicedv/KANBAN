import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useDispatch, useSelector} from "react-redux";
import {toggleEdit} from "../store/actions"

export const EditCard = () => {

    const dispatch = useDispatch();
    // const updatedTask = useSelector(state => state.cardReducer.updatedTask)
    const editModal = useSelector(state => state.cardReducer.editModal)

    return (
        <div>
            <Modal isOpen={editModal} toggle={() => dispatch(toggleEdit(!editModal))}>
                <ModalHeader toggle={() => dispatch(toggleEdit(!editModal))}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => dispatch(toggleEdit(!editModal))}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={() => dispatch(toggleEdit(!editModal))}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
