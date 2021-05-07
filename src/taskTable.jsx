import { useTask } from "./taskContext";

export default function TaskTable() {
    const {task, dispatch} = useTask();

    function displayTask() {
        if(task === 0) {
            return <td>You have no Tasks!</td>
        }
    }
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Task Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {task.map(displayTask)}
                </tbody>
            </table>
        </>
    )
}