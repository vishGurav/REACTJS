import React from "react";
function JsxRules()
{
    return(
        <div> 
         {/* //! jsx must have only one parent element */}
           
            <h1>hello jsx rules</h1>
            <h1>hello reactjs</h1>
            <h1>hello vishh.....</h1>

            {/* //! unpaired tag must be paired */}

            {/* <input type="text"> */} 
            {/* //! error */}

            <input type="text"/>

            {/* //! for attribute must be htmlfor */}
            <label htmlFor="user">enter nane</label>

            {/*//! class attribute must be className  */}
                <p className="p1">className</p>

            {/* //! html tag must be lower case */}

                <img/>
            {/* //! components must be pascal  case  */}

            {/* //! js code must be inside placeholders */}
            {/* let nm=vishh
            <h1>{name}</h1> */}

            {/* //!all attributes must be camel case */}

            <button onClick=""> button</button>
''
        </div>
    )
}
export default JsxRules