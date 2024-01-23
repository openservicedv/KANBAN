import React from 'react';
import Task from "./Task";
import Button from 'react-bootstrap/Button';

const Column = ({column, tasks, statuses}) => {
    return (
        <div className="col">
            <div className="d-flex justify-content-between"
                 style={{
                     border: "dashed blue",
                     marginBottom: "5px",

                 }}>
                <h4
                    style={{
                        border: "dashed blue",
                        marginBottom: "5px",
                        textAlign: "center",
                    }}>{column.title}</h4>
                <Button variant="outline-secondary">
                    ...
                </Button>
            </div>
            {tasks
                .filter(el => (el.status === column.status))
                .map(el => (
                    <Task
                        key={el._id}
                        task={el}
                        statuses={statuses}
                    />
                ))}


        </div>
    );
};

export default Column;
