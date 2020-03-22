import React from "react";

function Title (props){
    let small = (props.small)? "18px": "35px";
    return(
    <h1 style={{fontSize: small}}>{props.children}</h1>
    );
}
export default Title;
