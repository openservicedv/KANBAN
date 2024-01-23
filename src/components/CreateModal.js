import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';
import Form from 'react-bootstrap/Form';

const CreateModal = ({statuses, priority}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Create Task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input placeholder="task name"/>
                    </InputGroup>
                    <InputGroup style={{marginBottom: "15px"}}>
                        <Input placeholder="task description"/>
                    </InputGroup>
                    <Form.Select aria-label="Default select example" style={{marginBottom: "15px"}}>
                        <option>Choose status</option>
                        {statuses.map(el => (
                            <option key={el._id} value={el.status}>{el.status}</option>
                        ))}
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Choose priority</option>
                        {priority.map((el, idx) => (
                            <option key={idx} value={el}>{el}</option>
                        ))}
                    </Form.Select>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default CreateModal;
