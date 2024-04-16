import React, {FC} from 'react';
import KanbanCard from "./KanbanCard";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {TaskType} from "../types";

type PropsType = {
    column: any
    isEditModalOpen: boolean
    setIsEditModalOpen: (isEditModalOpen: boolean) => void
}
export const KanbanColumn: FC<PropsType> = ({column, isEditModalOpen, setIsEditModalOpen}) => {
    const tasks: TaskType[] = useSelector((state: AppStateType) => state.taskReducer.tasks)

    return (
        <div className="col"
             style={{
                 border: "solid gray 1PX",
                 borderRadius: "10px",
                 background: "#EEEDEDFF",
                 margin: "5px",
                 padding: "5px",
             }}>
            <div className="d-flex justify-content-center align-items-center">
                <h4>{column.title}</h4>
            </div>
            {tasks
                .filter((el: TaskType): boolean => (el.status === column.status))
                .map((el: TaskType) => (
                    <KanbanCard key={el._id}
                                task={el}
                                isEditModalOpen={isEditModalOpen}
                                setIsEditModalOpen={setIsEditModalOpen}
                    />
                ))
            }
        </div>
    )
}
