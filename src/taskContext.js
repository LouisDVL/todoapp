import React, {useReducer, useContext } from "react";
import taskReducer from "./TaskReducer";
import IdCounter from "./idCounter";

export const TaskContext = React.createContext(null);

let initialTask = [];
let initialIdCount = 0;

export function TaskProvider(props) {
    const [task, dispatch] = useReducer(taskReducer, initialTask);
    const [idCount, countDispatch] = useReducer(IdCounter, initialIdCount);

    const contextValue = {
        task,
        idCount,
        countDispatch,
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