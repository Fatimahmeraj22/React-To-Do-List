import react, { useState } from "react";

function ToDolist() {
  const [tasks, setTasks] = useState(["Eat BreakFast","Take a shower ","walk the dog"]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
}
function addTask() {}
function deleteTask(index) {}
function moveTaskup(index) {}
return <></>;
<div className="to-do-list">
  <h1>To-Do-List</h1>
  <div>
    <input
      type="text"
      placeholder="Enter a task..."
      value={newTask}
      onChange={handleInputChange}/>
      <button
      className="add-button"
      onClick={addTask}>
        Add 
      </button>
    
  </div>
  <ol>
    {task.map(task,index)=>
     <li key={index}> 
      <span className="text">{task}</span>
      <button>
        className= "delete-button"
        onClick={()=> delete-button(index)}>
        Delete

      </button>
      <button>
        className="delete-button"
        <onClick>()=> deleteTask(index)</onClick>
      </button>
     </li> }
  </ol>
</div>;

export default ToDoList;
