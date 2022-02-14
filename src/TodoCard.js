import React from "react";

function TodoCard(props) {
  const {title, clickToRemove, index} = props
  return (
    
    <li style={{ color: "#FA023C"}} >{title}
    <button onClick={()=> {clickToRemove(index)}}>Remove</button>
    </li>
    
  )
}



export default TodoCard