import React, { useState } from "react";
import "./EditTask.css"; 

export default function EditTask({ task, onSave, onClose }) {
    const [taskName, setTaskName] = useState(task.taskName);

    const handleSave = () => {
        const updatedTask = { ...task, taskName };
        onSave(updatedTask);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Edit Task</h4>
                    <button className="close" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <label>Task Name:</label>
                    <input 
                        type="text" 
                        value={taskName} 
                        onChange={(e) => setTaskName(e.target.value)} 
                    />
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                    <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
