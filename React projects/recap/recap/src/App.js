
import './App.css';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page3 } from './Page3';
import { Route,Routes,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {

  let variable="number";
  const navigate=useNavigate()
  return (
    <div className="App">

      <h2> this is the Recap of topics</h2>
      <p> here  this above line and links are present for all pages. you can click on different pages but still you find them</p>

       <p> these are the links with 'a' tag href. this is ud=sed to get rid of manual typing of route paths in url </p>
      <a href='/Page1'>Page1</a><br/>
      <a href='/Page2'>Page2</a><br/>
      <a href='/Page2'>Page3</a>


      <p> but you can observe that when you click on links you may find reload option converting into cross... to get rid of this 'Link to' is used</p>
        
      < Link to='/Page1'>Page1</Link><br/>
      <Link to='/Page2'>Page2</Link><br/>
      <Link to='/Page3'>Page3</Link>

      <button onClick={()=>{
        (navigate('/Page1'))}}>page1</button>
       

      <Routes>
        <Route path="/Page1" element={<Page1/>}/>
        <Route path="/Page2" element={<Page2/>}/>
        <Route path="/Page3" element={<Page3/>}/>
      </Routes>
      
    </div>
  );
}


 export default App;
