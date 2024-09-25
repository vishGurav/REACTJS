import React from "react";
 function Student()
 {
    let name="vish gurav"
    let m1=()=>{
        console.log("hello")
        return "hello"
    }

    let s1={sname:"vish",age:23}
    return(
        <div>
            <h1>hello i am {name}</h1>
            <p>{m1}</p>

            {/* <p>{s1}</p> */} //!error

            <p>{JSON.stringify(s1)}</p>
        </div>
    )
 }
 export default Student