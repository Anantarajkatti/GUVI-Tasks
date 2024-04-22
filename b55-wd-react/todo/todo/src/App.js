
import './App.css';
import { Card } from './Card';
const tasks=[
  {
    name:"Office Task 1",
    description:"this is description task",
    status:"completed"
  },
  {
    name:"Office Task 1",
    description:"this is description task",
    status:"completed"
  },
  {
    name:"Office Task 1",
    description:"this is description task",
    status:"completed"
  },
  {
    name:"Office Task 1",
    description:"this is description task",
    status:"completed"
  },
  {
    name:"Office Task 1",
    description:"this is description task",
    status:"completed"
  },
  {
    name:"Office Task 1",
    description:"this is description task",
    status:"completed"
  },
]
function App() {
 


  return (
    <div className="App">
    <h2 className="heading">MY Todo</h2>
    <div className='inputbar'>
      <div><input placeHolder="TodoName"></input></div>
      <div><input placeHolder="Todo Discription"></input></div>
      <div><button className='AddToDO'>Add ToDo</button></div>
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
      {tasks.map((task,index)=>{return(
        <Card task={task}/>
        
      )})}
    </div>
    </div>
  );
}

export default App;
