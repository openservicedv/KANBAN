import React from 'react';
// import {Button} from "reactstrap";
import Button from 'react-bootstrap/Button';

const Task = ({task}) => {
    return (
        <div className="card"
             style={{
                 // border: "solid",

             }}>
            <div className="card-body"
                 style={{
                     border: "brown dashed",
                     marginBottom: "10px",
                     height: "300px",

                 }}>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed blue",
                         marginBottom: "5px",

                     }}>
                    <h5 className="card-title"
                        style={{
                            border: "solid red",

                        }}>{task.name}</h5>
                    <Button variant="outline-secondary">
                        -
                    </Button>

                </div>
                <p className="card-text"
                   style={{
                       border: "solid green",

                   }}>{task.description}</p>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed green",
                         marginBottom: "5px",
                     }}
                >
                    <p className="card-text"
                       style={{
                           border: "solid blue",

                       }}>priority: {task.priority}
                    </p>
                    <Button variant="outline-secondary">
                        -
                    </Button>
                    <Button variant="outline-secondary">
                        +
                    </Button>
                </div>
                <div className="d-flex justify-content-start"
                     style={{
                         border: "dashed red",

                     }}
                >
                    <Button variant="outline-secondary">
                        -
                    </Button>
                    <Button variant="outline-secondary">
                        Delete
                    </Button>
                    <Button variant="outline-secondary">
                        +
                    </Button>
                </div>
                {/*<p className="card-text"*/}
                {/*   style={{*/}
                {/*       border: "solid red",*/}

                {/*   }}>priority: {task.status}</p>*/}
            </div>
        </div>
    );
};

export default Task;
