import { useState } from "react";
import { useTask } from "./taskContext";

export default function InputText(){
    const { dispatch, idCount, countDispatch } = useTask();
    const [ name, setName ] = useState("");

    function AddTask() {
        dispatch({type:"add", name, id : idCount});
        countDispatch({type: "Increment"});
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    function clearTask() {
        dispatch({type: "empty"});
    }

    return (
        <>
            <div className="int-group mb-3">
                <input type="text" className="form-control" placeholder="Task" value={name.value} onChange={e => handleChange(e)}/>
            </div>
            <button type="button" className="btn btn-success" onClick={AddTask}>Add Task</button>
            <button type="button" className="mr-3 btn btn-danger" onClick={clearTask}>Clear Task</button>
        </>
    )
}