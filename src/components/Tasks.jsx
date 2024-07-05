import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./workers.css";
import EditTask from "./EditTask"; 

export default function Tasks(){
    const dispatch = useDispatch();
    const tasks = useSelector(state => state?.task);
    const [selectedTask, setSelectedTask] = useState(null); 

    const handleDelete = (task) => {
        dispatch({ type: "DELETE_TASK", payload: task });
    }

    const handleEdit = (task) => {
        setSelectedTask(task);
    }

    const handleSave = (updatedTask) => {
        dispatch({ type: "UPDATE_TASK", payload: updatedTask });
        setSelectedTask(null); 
    }

    return (
        <div className="carder">
            {
                tasks?.map((task, index) => (
                    <div className="card" key={task.id || index}>
                        <div className="card-header">
                            <h3>Task Name: {task.taskName}</h3>
                            <button className="btn btn-danger" onClick={() => handleDelete(task)}>Delete</button>
                            <button className="btn btn-primary" onClick={() => handleEdit(task)}>Edit</button>
                        </div>
                    </div>
                ))
            }
            {selectedTask && (
                <EditTask
                    task={selectedTask} 
                    onSave={handleSave} 
                    onClose={() => setSelectedTask(null)} 
                />
            )}
        </div>
    );
}
