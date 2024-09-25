import React, { useState } from "react";

 function HocCounter(OriginalComponent,c)
 {
    
    function NewComponent()
    {
        
        let [count,Setcount]=useState(0)
        let incrementCounter=()=>
        {
            Setcount(count+c);
        }

        let decrementCounter=()=>{
            Setcount(count-c)
        }

        return <OriginalComponent count={count} incrementCounter={incrementCounter} decrementCounter={decrementCounter}/>
    }
    return NewComponent
    
 }
 export default HocCounter