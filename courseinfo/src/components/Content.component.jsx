import React from 'react'
import Part from './Part.component';
const Content = (props) => {
    const {parts,exercises}=props;
    
    return ( 
    <div>
        {parts.map((part,index)=><Part part={part} exercises={exercises[index]}/>)}
    </div>);
}
 
export default Content;