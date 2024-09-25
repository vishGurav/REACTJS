import React, { createContext } from "react";
import Child1 from "./child1";

const name ="vish"
const age =23;
const data=createContext();
const data1=createContext();


//! useContext
//* create,provider,useContext

function Parent()
{
    return(
        <data.Provider value={name}>
            <data1.Provider value={age}>
                <Child1/>
            </data1.Provider>
        </data.Provider>
    )
}
export default Parent
export {data,data1}