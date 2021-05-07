export default function taskReducer(tasklist, action) {
    switch(action.type) {
        case "empty":
            return [];
        case "deleteTask": 
            const { taskId } = action;
            return tasklist.filter((t) => t.taskId !== taskId);
        case "add":
            const { name } = action
            return [...tasklist, name];
        default:
            throw new Error("Unhandled action " + action.type);
    }
}
