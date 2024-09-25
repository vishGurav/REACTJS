import React, { createContext } from "react";
import Child2 from "./Child2";
const data=createContext();
    const name="vish";
    const age =23;
const data1=createContext();
function Child1()
{
    

    //! Context APi?
    //* Create ,Provider,Consumer
    //! how to use 
    //! is context api also problematics..! 
    return(

    <div>
        <data.Provider value={name}>
            <data1.Provider value={age}>
                    <Child2/>
            </data1.Provider>
 
        </data.Provider>
    </div>

       
    )
}
export default Child1
export {data,data1};