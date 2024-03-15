
import './App.css';
//  obj=[{level:'free'}{level:'pro'}{level:'pro'}]

function App() {

  
   //any javascript code starts

  //any javascript code ends

  // JSX starts
  return (
    <div className="App">
      <Cards/>
    </div>
  );

  
}

export default App;


// write here other component functions-------

function Cards(){
     

  return(  
    <div class="container ">
        <div class="card">
          <div class="card-body">
            <h5 class='type'>free</h5>
            <h3 class="card-title" >$0/month</h3>
            <p class="card-text1">single user</p>
            <p class="card-text2"><i class="bi bi-shield-fill-l-check"></i>Unlimited public projects</p>
            <p class="card-text4"><i class="bi bi-shield-ficheck"></i>50GB storage</p>
            <p class="card-text3"><i class="bi bi-shield-filll-check"></i>Community Access</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>Unlimited private projects</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>dedicated phone support</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>free Subdomain</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>Monthly status report</p>
            <p class='button'><a href="#" class="btn btn-primary">Buy</a></p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class='type'>free</h5>
            <h3 class="card-title" >$0/month</h3>
            <p class="card-text1">single user</p>
            <p class="card-text2"><i class="bi bi-shield-fill-check"></i>50GB storage</p>
            <p class="card-text3"><i class="bi bi-shield-fill-check"></i>Unlimited public projects</p>
            <p class="card-text4"><i class="bi bi-shield-fill-check"></i>Community Access</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>Unlimited private projects</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>dedicated phone support</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>free Subdomain</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>Monthly status report</p>
            <p class='button'><a href="#" class="btn btn-primary">Buy</a></p>
           
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class='type'>free</h5>
            <h3 class="card-title" >$0/month</h3>
            <p class="card-text1"><i class="bi bi-shield-fill-check"></i>single user</p>
            <p class="card-text2"><i class="bi bi-shield-fill-check"></i>50GB storage</p>
            <p class="card-text3"><i class="bi bi-shield-fill-check"></i>Unlimited public projects</p>
            <p class="card-text4"><i class="bi bi-shield-fill-check"></i>Community Access</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>Unlimited private projects</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>dedicated phone support</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>free Subdomain</p>
            <p class="card-text5"><i class="bi bi-shield-fill-x"></i>Monthly status report</p>
            <p class='button'><a href="#" class="btn btn-primary">Buy</a></p>
          </div>
        </div>
      </div>)

    


    
}

//Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.


