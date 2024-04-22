import { initial_PL } from './App';
import { Product } from './Product';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export function Prodlist({productList, setProductList}) {
 // const productList = initial_PL;
  const [name,setName]=useState("")
  const [poster,setPoster]=useState("")
  const [price,setPrice]=useState("")
  const [rating,setRating]=useState("")
  const [summary,setSummary]=useState("")


   
    
      
     useEffect(()=>{
      const storedproductList=JSON.parse(localStorage.getItem("productList"))
      if(storedproductList){
        setProductList(storedproductList)
      }
     },[])//called only once    this to store in the local storage


     useEffect(() => {
  
       localStorage.setItem("productList",JSON.stringify(productList))
     }, [productList])// called every time productlist is updated
     

     const handleAddproduct=() => {
        const newProduct={ 
          name,
          poster,
           price,
          rating,
          summary
        }
        setProductList([...productList,newProduct])
        setName("")
        setPoster("")
        setPrice("")
        setRating("")
        setSummary("")
        }
       
    
      // const new_obj = {
      //   name: undefined,
      //   poster: undefined,   // or to add you can do it using set state also
      //   price: undefined,
      //   rating: undefined,
      //   summary: undefined
      // };

  return (<>
    <div className="inputfield">

    <TextField id="outlined-basic" label="name" variant="outlined" onChange={(event) => (setName(event.target.value))} />

      
      <input type='text' placeholder='name' onChange={(event) => (setName(event.target.value))}></input>
      <input type='text' placeholder='poster' onChange={(event) => (setPoster(event.target.value))}></input>     
        <input type='text' placeholder='price' onChange={(event) => (setPrice (event.target.value))}></input>
      <input type='number' placeholder='rating' onChange={(event) => (setRating(event.target.value))}></input>
      <input type='text' placeholder='summary' onChange={(event) => (setSummary(event.target.value))}></input>
      <Button variant="contained" onClick={handleAddproduct}> ADD Product</Button>
    </div>


    <div className="product-list">
      {productList.map((item, index) => (<Product key={index}  product={item} id={index} />))}
    </div>
    </>
  );
  }

