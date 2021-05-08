export default function IdCounter(idCount, action) {
    switch(action.type) {
        case "Increment":
            const newIdCount = idCount + 1;
            return newIdCount;
        default:
            throw new Error(
                "This action was not handled " + action.type
            );
    }
}