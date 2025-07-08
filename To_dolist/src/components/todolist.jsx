import { useState } from "react";
import "./todo.css";
function ToDolist(){
const[task,setTasks]=useState([{ title: "Read book", completed: false, timestamp: Date.now() }]);
const[addNewtask,setNewtask]=useState("");
function inputHandleChange(event){

setNewtask(event.target.value);
}
function addtask(){

    setTasks(t=>[...t,addNewtask]);
    
}
function deleteTask(index){
const updatedTasks = task.filter((_,i)=>i!==index);
setTasks(updatedTasks);
}
function moveUp(index){
    if(index>0){
    const update=[...task];
[update[index],update[index-1]]=[update[index-1],update[index]]
setTasks(update);
    }
}
function moveDown(index){
if(index<task.length-1){
const update1=[...task];
[update1[index+1],update1[index]]=[update1[index],update1[index+1]]
setTasks(update1);
}

}

return(
    <>
   <div className="parent">
    <h1>To Do List</h1>
   <span> <input className="tung"type="text" placeholder="Enter the task" value={addNewtask} onChange={inputHandleChange}/><button className="add" onClick={addtask}>Add</button></span>
    <ol>
        {task.map((task,index)=>
<div className="qwertyu"><li key={index}>
    <span className="texty">{task.title }</span>
        <button className="delete"  onClick={()=>deleteTask(index)}>Delete</button>
         <button className="moveUp"  onClick={()=>moveUp(index)}>Move Up</button>
          <button  className="moveDown" onClick={()=>moveDown(index)}>Move down</button>
          </li>
</div>
        )}
        
    </ol>
    </div>
    </>
);

}
export default ToDolist;