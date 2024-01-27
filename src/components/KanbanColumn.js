import React from 'react';
import KanbanCard from "./KanbanCard";
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";

export const KanbanColumn = ({column, priority}) => {
    const tasks = useSelector(state => state.taskReducer.tasks)

    return (
        <div className="col"
             style={{
                 border: "solid gray 1px",
                 borderRadius: "10px",
                 background: "#EEEDEDFF",
                 // height: "0px",
                 width: "270px",
                 margin: "5px",
                 padding: "5px",
             }}>

            <div className="d-flex justify-content-between align-items-center"
                 style={{
                     // border: "solid gray 1px",
                     borderRadius: "5px",
                     marginBottom: "5px",
                     width: "270px",
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
                <Button variant="warning"
                        style={{
                            border: "solid gray 1px",
                            width: "40px",
                            height: "40px",
                            // background: "white"
                            // marginBottom: "5px",
                            // textAlign: "center",
                        }}
                > ...
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
