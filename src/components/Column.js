import React from 'react';
import Task from "./Task";

const Column = ({column, tasks}) => {
    return (
        <div className="col">
            <h4>{column.title}</h4>
            {tasks
                .filter(el => (el.status === column.status))
                .map(el => (
                    <Task
                        key={el._id}
                        task={el}
                    />
                ))}


        </div>
    );
};

export default Column;
