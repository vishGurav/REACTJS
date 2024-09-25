import React, { useEffect, useState } from "react";
function Useeffecthook1()
{
    const[count,setcount]=useState(0)
    const[even,setevenodd]=useState('even')

    useEffect(()=>{
        console.log("useeffect")
        if(count%2===0)
        {
            setevenodd('even')
        }
        else
        {
            setevenodd('odd')
        }

        return ()=>{console.log("useeffect remove")}
    },[count])
    console.log("re-render")

    let update=()=>{
        setcount(count+1)
    }


    return(
        <>
        <h1>count : {count}</h1>
        <h1>   =  {even}</h1>
        
        <button onClick={update}>increment </button>
        <hr/>
        {/* <h1>count 2 :{count2} </h1>
        <button onClick={()=>{setcount2(count2+5)}}>increment by 5</button> */}
        </>
    )
}
export default Useeffecthook1