
import SideBar from './components/SideBar';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import TopBar from './components/TopBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './components/Dashboard';


function App() {
  return (
<BrowserRouter>
  <div className="App">
    <div id="wrapper">
     <SideBar/>
   
    {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
          <div id="content">
            <TopBar/>
            <div class="container-fluid">

            {/* in version 5 we use switch, exact, component ..... in version 6 we use Routes,element */}
              <Switch>
                <Route path="/" exact={true} component={Dashboard}/>
              </Switch>
            </div>
          </div>
        </div>
    </div>
  </div>
 </BrowserRouter>
  );
}

export default App;
