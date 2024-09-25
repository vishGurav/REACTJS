import React, { useContext } from "react";
import {data,data1} from "./Parent"


function Child3()
{
    const name=useContext(data);
    const age =useContext(data1);
    return(
        <div>
            <h1>my name is :{name} and age is : {age} </h1>
        </div>

    )
}
export default Child3