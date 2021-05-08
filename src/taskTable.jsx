import { useTask } from "./taskContext";

export default function TaskTable() {
    const {task, dispatch} = useTask();
    const taskNum = task.length;

    function deleteTask(taskId) {
        dispatch({type: "deleteTask", id: taskId});
    }

    async function markCompleted(taskId) {
        dispatch({type: "markCompleted", id: taskId});
        console.log(task);
    }

    function displayTask(task) {
        return (
            <tr key={task.id}>
                <td>
                    {task.name}
                    <div className="justify-content-end">
                        <button type="button" className="btn btn-success" onClick={() => markCompleted(task.id) }>Done</button>
                        <button value={task.id} type="button" className="btn btn-danger" onClick={() => deleteTask(task.id) }>Delete</button>
                    </div>
                </td>
            </tr>
        )
    }
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Task Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {taskNum === 0 
                        ? <tr><td>You have no tasks</td></tr>
                        : task.map(displayTask)
                    }
                </tbody>
            </table>
        </>
    )
}