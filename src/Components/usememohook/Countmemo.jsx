import React, { useMemo, useState } from "react";
function Countmemo()
{
    const[add,setadd]=useState(0);
    const [delet,setdelet]=useState(90);

    //* here we run the app then we are click the add button then muliple function run 
    //* and we are click the delete button that time muliple function is run (that means compoment is going to rerender.)
    //* this is disadvantages ..after changing state value then always excute the function..
    // function multiple(){
    //     console.log("************************")
    //     return add*10
        
    // }

    //!UseMemo hook..
    // const multiple=useMemo(function multiple(){
    //     console.log("************************")
    //     return add*10
        
    // },[add]) 

    const multiple=useMemo(()=>{
        console.log("************************")
        return add*10
        
    },[add]) 

    return(
        <>
        <h1>react usememo </h1>
        {multiple}<br></br>
        <button onClick={()=>{setadd(add+1)}}>add</button>
        <span>{add}</span>
        <hr/>
        <button onClick={()=>{setdelet(delet-1)}}>delete</button>
        <span>{delet}</span>
        
        </>
    )
}
export default Countmemo