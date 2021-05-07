import React, {useReducer, useContext } from "react";
import taskReducer from "./TaskReducer";

export const TaskContext = React.createContext(null);

let initialTask = [];

export function TaskProvider(props) {
    const [task, dispatch] = useReducer(taskReducer, initialTask);
    const contextValue = {
        task,
        dispatch
    };
    return (
        <TaskContext.Provider value={contextValue}>
            {props.children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    const context = useContext(TaskContext);
    if(!context) {
        throw new Error(
            "useTask must be used within a TaskProvider. Wrap a parent component in <TaskProvider> to fix this error."
        );
    }
    return context;
}