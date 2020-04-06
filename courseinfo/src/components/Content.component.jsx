import React from 'react'
const Content = (props) => {
    const {parts,exercises}=props;
    console.log(parts,exercises);
    
    return ( parts.map((part,index)=> <p> {part} {exercises[index]} </p>));
}
 
export default Content;