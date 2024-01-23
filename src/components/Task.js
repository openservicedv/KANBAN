import React from 'react';

const Task = ({task}) => {
    return (
        <div className="card"
             style={{
                 // border: "solid",

             }}>
            <div className="card-body"
                 style={{
                     border: "solid brown",
                     marginBottom: "10px",
                     height: "300px",

                 }}>
                <h5 className="card-title"
                    style={{
                        border: "solid red",

                    }}>{task.name}</h5>
                <p className="card-text"
                   style={{
                       border: "solid green",

                   }}>{task.description}</p>
                <p className="card-text"
                   style={{
                       border: "solid blue",

                   }}>priority: {task.priority}</p>
                <p className="card-text"
                   style={{
                       border: "solid red",

                   }}>priority: {task.status}</p>
            </div>
        </div>
    );
};

export default Task;
