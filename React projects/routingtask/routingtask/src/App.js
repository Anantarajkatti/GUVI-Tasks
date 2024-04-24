
import { Routes,Link,Route } from 'react-router-dom';
import './App.css';
import All from './components/All';
import Fullstack from './components/Fullstack';
import Datascience from './components/Datascience';
import Cyber from './components/Cyber';
import Career from './components/Career';

// const Courses=[
//   {
//     category:"full stack development",
//     title:"",
//     image:""  
//   },
//   {
//     category:"full stack development",
//     title:"",
//     image:""  
//   },
//   {
//     category:"full stack development",
//     title:"",
//     image:""  
//   },
//   {
//     category:"full stack development",
//     title:"",
//     image:""  
//   },
//   {
//     category:"full stack development",
//     title:"",
//     image:""  
//   },
//   {
//     category:"full stack development",
//     title:"",
//     image:""  
//   },
//   {
//     category:"full stack development",
//     title:"",
//     image:""  
//   }

// ]

function App() {
  return (
    <div className="App">
     <div className='navbar'>
        <nav>
          <ul>
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/fullstck">Full Stack Development</Link>
            </li>
            <li>
              <Link to="/datascience">Data Science</Link>
            </li>
            <li>
              <Link to="/cybersecurity">Cyber Security</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </nav>
        </div>
        <br/>
     <Routes>
     <Route path="/all" element={<All/>}/>
  <Route path="/fullstck" element={<Fullstack/>}/> 
  <Route path="/datascience"  element={<Datascience/>}/>
  <Route path="/cybersecurity" element={<Cyber/>}/>
  <Route path="/career" element={<Career/>}/>
     </Routes>
    </div>
  );
}

export default App;
