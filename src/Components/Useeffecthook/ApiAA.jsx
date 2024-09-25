import React, { useEffect, useState } from "react";
function ApiAA()
{
    const [users,Setusers]=useState([])

    useEffect(()=>
    {
        async function getgituserdata()
        {
            let gituser=await fetch("http://api.github.com/users")
            gituser=await gituser.json();
            Setusers(gituser)

        }
        getgituserdata()
    }
    )
    
    // !Or

    /*
    async function getgituserdata()        
    {
        let gitusers=await fetch("http://api.github.com/users")
        gitusers=await gitusers.json()
        setUsers(gitusers)
    }

    useEffect(()=>
    {
       getgituserdata()
    },[])
    */

    // !Or
    
    /*
    useEffect(()=>
    {
       getgituserdata()
    },[])
    
    async function getgituserdata()        
    {
        let gitusers=await fetch("http://api.github.com/users")
        gitusers=await gitusers.json()
        setUsers(gitusers)
    }
    */

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
export default ApiAA