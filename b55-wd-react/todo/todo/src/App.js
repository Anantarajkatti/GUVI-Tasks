
import './App.css';

import {useState} from 'react';




function App() {
  const [tasklist,setTasklist]=useState([])
  const [name,setName]=useState("")
const [desc,setDesc]=useState("")
const [status,setStatus]=useState("Notcompleted")
const[filteredOption,setFilteredOption]=useState("All")


  const handlefunction=()=>{
    const newTask={
      name:name,
      description: desc,
      Status:status
    }
    setTasklist([...tasklist,newTask]);
      
    setName("") ;
    setDesc("");
   
  }
 
console.log(tasklist)
console.log(name)
console.log(status)
  return (
    <div className="App">
    <h2 className="heading">MY Todo</h2>
    <div className='inputbar'>
      <div><input placeholder="TodoName" name="name"  value={name} onChange={(event) => (setName(event.target.value))}></input></div>
      <div><input placeholder="Todo Discription" name='desc' value={desc}  onChange={(event) => (setDesc(event.target.value))}></input></div>
      <div><button className='AddToDO' onClick={handlefunction}>Add ToDo</button></div>
    </div>
    <div className="filterbar">
      <div>My ToDo</div>
      <div className="filterbutton">
        <div>FilterBy:  </div>
        <select name="All">
            <option value="All" onChange={(Event) => {
          setFilteredOption(Event.target.value)
           }}>All</option>
            <option value="Notcompleted">Notcompleted</option>
            <option value="Completed">Complted</option>
        </select>
      </div>
    </div>
    
    <div className="task-container">
      {tasklist.map((task,index)=>{return(
         
        <Card tasklist={tasklist} setTasklist={setTasklist} task={task }  index={index} />
        
      )})}
    </div>
    </div>
  );
}

function Card({ tasklist,setTasklist,task,  status,index}) {
  const [selectedOption, setSelectedOption] = useState("Notcompleted");
   const handleDelete=()=>{
    const updatedTasklist = tasklist.filter((_, i) => i !== index);
    setTasklist(updatedTasklist);
   }

  task.Status=selectedOption
 console.log(status)
  console.log(task)
  console.log(index)
  console.log(tasklist)
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
        <button style={{ backgroundColor: "rgb(223 142 142)" }} onClick={handleDelete}>Delete</button>
          </div>
       
    </div>
  );
}

export default App;
