// import { initial_PL } from './App';
import { Product } from './Product';
//import { useState,useEffect } from 'react';
//import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';



export function Prodlist({productList }) {
 // const productList = initial_PL;
  
       
    
      // const new_obj = {
      //   name: undefined,
      //   poster: undefined,   // or to add you can do it using set state also
      //   price: undefined,
      //   rating: undefined,
      //   summary: undefined
      // };

  return (<>
 
    


    <div className="product-list">
      {productList.map((item, index) => (<Product key={index}  product={item} id={index} />))}
    </div>
    </>
  );
  }

  

