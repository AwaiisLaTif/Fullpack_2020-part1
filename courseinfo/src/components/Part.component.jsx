import React from 'react'
const Part = (prps) => {
    const {part,exercises}=prps;
    return (<p> {part} {exercises}</p>);
}
 
export default Part;