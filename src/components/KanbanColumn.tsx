import React, {FC} from 'react';
import KanbanCard from "./KanbanCard";
import Button from 'react-bootstrap/Button';
import {useSelector} from "react-redux";
import {AppStateType} from "../store";
// import {Priority as priority} from "../types";

type PropsType = {
    column: any
    isEditModalOpen: boolean
    setIsEditModalOpen: (isEditModalOpen: boolean) => void
}
export const KanbanColumn: FC<PropsType> = ({column, isEditModalOpen, setIsEditModalOpen}) => {
    const tasks = useSelector((state: AppStateType) => state.taskReducer.tasks)

    return (
        <div className="col"
             style={{
                 border: "solid gray 1PX",
                 borderRadius: "10px",
                 background: "#EEEDEDFF",
                 margin: "5px",
                 padding: "5px",
             }}>

            <div className="d-flex justify-content-between align-items-center"
                 style={{
                     // border: "DASHED BLUE 1PX",
                     margin: "5px",
                 }}>
                <h4
                    style={{
                        // border: "DASHED RED 1PX",
                        width: "200px",
                        textAlign: "center",
                    }}>
                    {column.title}</h4>
                <Button variant="warning"
                        style={{
                            border: "solid gray 1px",
                            width: "40px",
                            height: "40px",
                        }}
                > ...
                </Button>
            </div>
            {tasks
                .filter(el => (el.status === column.status))
                .map(el => (
                    <KanbanCard key={el._id}
                                task={el}
                        // priority={priority}
                                isEditModalOpen={isEditModalOpen}
                                setIsEditModalOpen={setIsEditModalOpen}
                    />
                ))
            }
        </div>
    );
};
