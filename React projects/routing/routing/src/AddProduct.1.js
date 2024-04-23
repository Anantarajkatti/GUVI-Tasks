import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export function AddProduct({productList, setProductList}) {
    const [name,setName]=useState("")
    const [poster,setPoster]=useState("")
    const [price,setPrice]=useState("")
    const [rating,setRating]=useState("")
    const [summary,setSummary]=useState("")
  
  
     
    const navigate=useNavigate()

        
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
          // copy the  new product
          setProductList([...productList,newProduct])
          // automatically drives to product page
           navigate('/product')
           // clears feilds
          setName("");
          setPoster("");
          setPrice("");
          setRating("");
          setSummary("");
          }
      return(
        <div className="inputfield">
  
      <TextField id="outlined-basic" label="name" variant="outlined" onChange={(event) => (setName(event.target.value))} />
  
        
        <input type='text' placeholder='name' onChange={(event) => (setName(event.target.value))}></input>
        <input type='text' placeholder='poster' onChange={(event) => (setPoster(event.target.value))}></input>     
          <input type='text' placeholder='price' onChange={(event) => (setPrice (event.target.value))}></input>
        <input type='number' placeholder='rating' onChange={(event) => (setRating(event.target.value))}></input>
        <input type='text' placeholder='summary' onChange={(event) => (setSummary(event.target.value))}></input>
        <Button variant="contained" onClick={handleAddproduct}> ADD Product</Button>
      </div>
      )
}
