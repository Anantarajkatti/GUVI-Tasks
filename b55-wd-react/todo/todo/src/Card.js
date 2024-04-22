import { useState } from 'react';

export function Card({ task }) {
  const [selectedOption, setSelectedOption] = useState("Notcompleted");
  return (
    <div className="card">
      <p> Name:  {task.name}</p>
      <p> Description:  {task.description}</p>
      <p>status:
        <select className="card-filter" name="Notcompleted" value={selectedOption} onChange={(Event) => setSelectedOption(Event.target.value)} style={{ backgroundColor: selectedOption === "Completed" ? "rgb(80, 162, 83)" : "rgb(223, 142, 142)" }}>
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
