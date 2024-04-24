import React,{useState} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useContext } from 'react'
import UserContext from './UserContext'
function UsersCreate() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    
    const data=useContext(UsersCreate)
     console.log(data)

    const handleSubmit=()=>{
        console.log(name,email,phone)
        const newUserData={name,email,phone}
     console.log(newUserData)
    }
     
  return (
    <div className='container'>
    <h1>User Create</h1>
    <div className='row'>
        <div className='col-lg-12'>
            <label>Name</label>
            <input type="text" className='form-control' id="name" name='name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='col-lg-12'>
            <label>Email</label>
            <input type="email" className='form-control' id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='col-lg-12'>
            <label>Phone Number</label>
            <input type="number" className='form-control' id="phone" name="phone" onChange={(e)=>setPhone(e.target.value)}/>
        </div>
    </div>
    <br/>
    <div className='row' style={{justifyContent:'center'}}>
        <div className='btn btn-primary'>
            <input className='btn btn-primary' type='submit' onClick={handleSubmit}/>
        </div>
    </div>
    </div>
   
  )
}

export default UsersCreate