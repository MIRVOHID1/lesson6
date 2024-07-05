const initialState = {
    task: JSON.parse(localStorage.getItem("task")) || []
}

const taskReducer = (state = initialState, action) => {
    let updatedTasks;
    switch(action.type){
        case "SEND_TASK":
            updatedTasks = [...state.task, action.payload];
            localStorage.setItem("task", JSON.stringify(updatedTasks));
            return {
                ...state,
                task: updatedTasks,
            }

        case "DELETE_TASK":
            updatedTasks = state.task.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("task", JSON.stringify(updatedTasks));
            return {
                ...state,
                task: updatedTasks,
            }

        case "UPDATE_TASK":
            updatedTasks = state.task.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            localStorage.setItem("task", JSON.stringify(updatedTasks));
            return {
                ...state,
                task: updatedTasks,
            };

        default:
            return state;
    }
}

export { taskReducer }
