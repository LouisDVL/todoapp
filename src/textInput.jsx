export default function InputText(){
    return (
        <>
            <div className="int-group mb-3">
                <input type="text" className="form-control" placeholder="Task" />
            </div>
            <button type="button" className="btn btn-success">Add Task</button>
        </>
    )
}