import './App.css';
import TextInput from "./textInput";
import TaskTable from "./taskTable";

export default function App() {
  return (
    <div className="container">
      <h1>Simple To Do App</h1>
      {/* Create entry point for tasks and button to submit */}
      <TextInput />
      {/* Create a list showing all the tasks and a button to click done or delete */}
      <TaskTable />
    </div>
  );
}
