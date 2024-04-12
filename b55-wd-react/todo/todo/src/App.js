
import './App.css';

function App() {
  return (
    <div className="App">
    <h2 className="heading">MY Todo</h2>
    <div className='inputbar'>
      <div><input placeHolder="TodoName"></input></div>
      <div><input placeHolder="Todo Discription"></input></div>
      <div><button>Add ToDo</button></div>
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
    </div>
  );
}

export default App;
