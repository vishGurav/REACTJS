import React from "react";
import HocCounter from "./HocCounter";

function HocCounter1({count,incrementCounter,decrementCounter})
{
    return(
        <div>
        <h1>Count {count}</h1>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
    </div>
    )
}
export default HocCounter(HocCounter1,5)