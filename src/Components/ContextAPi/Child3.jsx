import React from "react";
import {data,data1} from './Child1'
function Child3()
{
    return(
        <>
        
        {/* //* single Contextapi accepets */}
        {/* <data.Consumer>
        {
                (name)=>{
                    return(
                    <h1>my name is : {name}</h1>
                    )

                }
            }
        </data.Consumer> */}
        
        {/* //*  multiple C0ntextapi accepets */}
            <data.Consumer>
                {
                    (name)=>
                    {
                        return(
                            <data1.Consumer>
                                {
                                    (age)=>
                                    {
                                        return(
                                            <h1> my name is {name} and age is :{age}</h1>
                                        )
                                    }  
                                }
                            </data1.Consumer>

                        )
                    }
                }
            </data.Consumer>
        </>

        
    )
}
export default Child3