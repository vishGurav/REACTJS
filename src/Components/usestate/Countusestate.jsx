import { useState } from "react";
function Countsetstate()
{
    let [count,setcount]=useState(0);
    let updatecount=()=>
    {
        count++;
        console.log(count)
        setcount(count);
    }
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={updatecount}>incrementCount</button>
        </div>
    )


}
export default Countsetstate