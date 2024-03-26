import './App.css';
import photo from "./tv.jpeg";
import React, { useState } from 'react';

let obj=[
  {
      "id": "1",
      "product_name": "Intelligent Fresh Chips",
      "product_price": 655.00,
      "product_material": "Concrete",
      "product_color": "mint green"
  },
  {
      "id": "2",
      "product_name": "Practical Fresh Sausages",
      "product_price": 911.0,
      "product_material": "Cotton",
      "product_color": "indigo"
  },
  {
      "id": "3",
      "product_name": "Refined Steel Car",
      "product_price": 690.00,
      "product_material": "Rubber",
      "product_color": "gold"
  },
  {
      "id": "4",
      "product_name": "Gorgeous Plastic Pants",
      "product_price": 492.00,
      "product_material": "Soft",
      "product_color": "plum"
  },
  {
      "id": "5",
      "product_name": "Sleek Cotton Chair",
      "product_price": 33.00,
      "product_material": "Fresh",
      "product_color": "black"
  },
  {
      "id": "6",
      "product_name": "Awesome Wooden Towels",
      "product_price": 474.00,
      "product_material": "Plastic",
      "product_color": "orange"
  },
  {
      "id": "7",
      "product_name": "Practical Soft Shoes",
      "product_price": 500.00,
      "product_material": "Rubber",
      "product_color": "pink"
  },
  {
      "id": "8",
      "product_name": "Incredible Steel Hat",
      "product_price": 78.00,
      "product_material": "Rubber",
      "product_color": "violet"
  },
  {
      "id": "9",
      "product_name": "Awesome Wooden Ball",
      "product_price": 28.00,
      "product_material": "Soft",
      "product_color": "azure"
  },
  {
      "id": "10",
      "product_name": "Generic Wooden Pizza",
      "product_price": 84.00,
      "product_material": "Frozen",
      "product_color": "indigo"
  }]

  let count=0 ;

function App() {


   //any javascript code starts

  //any javascript code ends

  // JSX starts
  return (
    <div className="App">

      <p>-------------------------here we are learning----------------------------------</p>
      <div class="row">
      {obj.map((item)=>{return(<Component4  data={item}/>)})}
      </div>
    </div>
  );

  
}

export default App;


function Component4({data}){
   let [clicked,setClicked]=useState(false);
   //let [cartcount,setCartcount]=useState(0)

let cart=()=>{
 
  if(!clicked){
     count=count+1;
     document.getElementById('count').innerText=count;
     console.log(count)
}
else{
  count=count-1;
  document.getElementById('count').innerText=count;
  console.log(count)
}
}

   let addToCart=()=>{
    setClicked(!clicked);
      cart(clicked);
  

     
   };
   
  return(
    <>
   
    <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card" >
      <img src={photo} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{data.product_name}</h5>
        <p class="card-text">Rs:
        {data.product_price}</p>
        <a href="#" class="btn btn-primary" onClick={addToCart}>{clicked ? 'Remove from Cart' : 'Add to Cart'}</a>
        <p>here{clicked}</p>
      </div>
    </div>
  </div>
  </>
  )
}