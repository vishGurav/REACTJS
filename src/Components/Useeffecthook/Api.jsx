import React, { useEffect, useState } from "react";

function Api()
{
    let [user,setuser]=useState([])

    useEffect(()=>
    {
        let gitusers=fetch("http://api.github.com/users")
        gitusers.then((res)=>
            {
                return res.json()
            }).then((apidata)=>{
                setuser(apidata)
                console.log(apidata)
            })
       
    },[])
    console.log(user)
    return(
        <>
        <ul>
            {user.map(({id,avatar_url})=>{
                 return <li key={id}>
                 <img src={avatar_url} height="200px" alt="" />
             </li>
            })}
        </ul>
        </>
    )
}
export default Api