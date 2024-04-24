
import './App.css';

import {useState} from 'react';




function App() {
  const [tasklist,setTasklist]=useState([])
  const [name,setName]=useState("")
const [desc,setDesc]=useState("")
const [status,setStatus]=useState("Notcompleted")


  const handlefunction=()=>{
    const newTask={
      name:name,
      description: desc,
      Status:status
    }
    setTasklist([...tasklist,newTask])
      
    setName("");
    setDesc("");
  }
 
console.log(tasklist)

  return (
    <div className="App">
    <h2 className="heading">MY Todo</h2>
    <div className='inputbar'>
      <div><input placeholder="TodoName" onChange={(event) => (setName(event.target.value))}></input></div>
      <div><input placeholder="Todo Discription" onChange={(event) => (setDesc(event.target.value))}></input></div>
      <div><button className='AddToDO' onClick={handlefunction}>Add ToDo</button></div>
    </div>
    <div className="filterbar">
      <div>My ToDo</div>
      <div className="filterbutton">
        <div>FilterBy:  </div>
        <select name="All">
            <option value="All">All</option>
            <option value="Notcompleted">Notcompleted</option>
            <option value="Completed">Complted</option>
        </select>
      </div>
    </div>
    <div className="task-container">
      {tasklist.map((task)=>{return(
        <Card task={task } status={setStatus} function={handlefunction}/>
        
      )})}
    </div>
    </div>
  );
}

function Card({ task,  setStatus}) {
  const [selectedOption, setSelectedOption] = useState("Notcompleted");
   const [updatetask,setUpdatetask]=useState('')
  setStatus=selectedOption
  return (
    <div className="card">
      <p> Name:  {task.name}</p>
      <p> Description:  {task.description}</p>
      <p>status:
        <select className="card-filter" name="Notcompleted" value={selectedOption} onChange={(Event) => {
          setSelectedOption(Event.target.value)
           }}
          style={{ backgroundColor: selectedOption === "Completed" ? "rgb(80, 162, 83)" : "rgb(223, 142, 142)" }}>
          {/* style={name ==="Completed"? {backgroundColor: "rgb(80 162 83)"}:{backgroundColor: "rgb(223 142 142);"}} */}
          <option style={{ backgroundColor: "rgb(223 142 142)" }} value="Notcompleted">Notcompleted</option>
          <option style={{ backgroundColor: "rgb(80 162 83)" }} value="Completed">Completed</option>
        </select>
      </p>
        <div className='buttons'>
        <button style={{ backgroundColor:"rgb(80 162 83)"  }} >Edit</button>
        <button style={{ backgroundColor: "rgb(223 142 142)" }}>Delete</button>
        </div>
       
    </div>
  );
}

export default App;
