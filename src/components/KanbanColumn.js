import React from 'react';
import KanbanCard from "./KanbanCard";
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";

export const KanbanColumn = ({column, priority}) => {
    const tasks = useSelector(state => state.taskReducer.tasks)

    return (
        <div className="col"
             style={{
                 border: "solid black 5px",
                 background: "lightgreen",
                 // height: "0px",
                 width: "270px",
                 margin: "5px",
                 padding: "5px",
             }}>

            <div className="d-flex justify-content-between align-items-end"
                 style={{
                     border: "dashed blue 1px",
                     marginBottom: "5px",
                     width: "250px",
                     height: "45px",
                 }}>
                <h4
                    style={{
                        // border: "dashed red 1px",
                        width: "200px",
                        // height: "40px",
                        // marginBottom: "5px",
                        // textAlign: "center",
                        // verticalAlign: "center",
                    }}>{column.title}</h4>
                <Button variant="outline-secondary"
                        style={{
                            // border: "dashed red 1px",
                            // width: "30px",
                            // height: "30px",
                            // marginBottom: "5px",
                            // textAlign: "center",
                        }}
                >
                    ...
                </Button>
            </div>
            {tasks
                .filter(el => (el.status === column.status))
                .map(el => (
                    <KanbanCard key={el._id}
                                task={el}
                                priority={priority}
                    />
                ))
            }
        </div>
    );
};
