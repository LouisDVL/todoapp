export default function TaskReducer(tasklist, action) {
    switch(action.type) {
        case "empty":
            return [];
        case "deleteTask": {
            const { id } = action;
            return tasklist.filter((t) => t.id !== id);
        }
        case "add": {
            let { name, id } = action;
            let newArray = [...tasklist, {id, name, isComplete: false}];
            return newArray;
        }
        case "markCompleted": {
            let newArray = []
            const { id } = action;
            newArray = tasklist.map((task) => task.id === id
            ? {...task, isComplete: true}
            : task
            );
            return newArray;
        }
        default:
            throw new Error("Unhandled action " + action.type);
    }
}
