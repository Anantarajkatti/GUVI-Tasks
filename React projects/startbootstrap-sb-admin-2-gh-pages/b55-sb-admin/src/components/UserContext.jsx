import { createContext, useState } from "react"
import React  from 'react'

 export let UserContext= createContext()
 
 export const UserProvider=({Children})=>{
    const[userData,setUserData]=useState([])
    return(
        <UserContext.Provider  value={{userData,setUserData}}>
            {Children}
        </UserContext.Provider>

    )
 }


export default UserContext