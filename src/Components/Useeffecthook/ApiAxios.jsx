import React, { useEffect, useState } from "react";
import axios from 'axios'
function ApiAxios()
{
    // !Using Axios third party library 

    const[users,Setusers]=useState([])

    useEffect(()=>
    {
        async function getgitusers()
        {
            let gituser=await axios.get("http://api.github.com/users")
            Setusers(gituser.data)
        }
        getgitusers()
        
    })
    
    return(
        <>
         <ul>
            {users.map(({id,avatar_url})=>{
                 return <li key={id}>
                 <img src={avatar_url} height="200px" alt="" />
             </li>
            })}
        </ul>
        </>
    )

}
export default ApiAxios