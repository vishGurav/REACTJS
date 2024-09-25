import React, { useEffect, useState } from "react";
import axios from 'axios'
import Loader from "./Loader";
function ApiLoder()
{
    const[users,Setusers]=useState([])
    const[isloding,Setisloding]=useState(true)
    const[iserror,Setiserror]=useState(false)

    async function getgituserdata()        
    {
        try
        {
            let gitusers=await axios.get("http://api.github.com/users")
            Setusers(gitusers.data)
            console.log(gitusers);
            Setisloding(false)
            Setiserror(false)
        }
        catch(err)
        {
            Setisloding(false)
            Setiserror(true)
        }
    }
    
    useEffect(()=>
    {
    getgituserdata()
    },[])
    return(
        <>
     <div>
            <h1>{isloding && <Loader/>}</h1>
            <h1 style={{color:"red"}} >{iserror && "Errorr....!!!!!!!"}</h1>
                {users.map(({id,avatar_url})=>
                {
                    return <li key={id}>
                        <img src={avatar_url} width="200px" height="200px" alt="" />
                    </li>
                })}
        </div>
        </>
    )
}
export default ApiLoder