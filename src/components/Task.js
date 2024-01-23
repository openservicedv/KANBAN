import React from 'react';

const Task = ({task}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <p className="card-text">{task.description}</p>
                <p className="card-text">priority: {task.priority}</p>
                <p className="card-text">priority: {task.status}</p>
            </div>
        </div>
    );
};

export default Task;
