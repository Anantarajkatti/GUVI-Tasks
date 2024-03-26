
import './App.css';
import {useState} from 'react';
function App() {
  return (
    <div className="App">
      <p>this is the paragraph</p>
    <Counter />
    <AddColour />
    <AddColourArray />
    </div>
  );
}
export default App;

// basics component creation

function Basic(){
  return(
    <p>this is basic component creation on APP.js</p>
    
  )
}

//working on array with MAP method
//function Array()



// set state hook

function Counter(){
  const [count,setCount]= useState(0)
  return(
    <div>
    <button onClick={()=>setCount(count-1)}>-</button>
    <span>{count}</span>
    <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
// Adding colour
function AddColour(){
  const [color,setColor]=useState("")


  const style={
    backgroundColor:color
  }
  
  return(
    <div>
      <p>type colours here</p>
        <input style={style} type="text"
          onChange={(event) => setColor(event.target.value)} />

    </div>//colourArray.map(()={})
  )
   
}

//adding colours to array

function AddColourArray(){
  const array=['red','green']
  //  const style={
   
  //  }
  return(<div>
    <input type="text" 
    {array.map((item)=>( <div style={{ backgroundColor: 'red' }}> {item}</div>))}
    </div>
  )
}