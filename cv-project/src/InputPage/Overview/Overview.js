import React from "react";
import EduOver from "./EduOver"

const Overview = (props) => {
  const { eduArray, handleEdit, moveUpDown } = props;
  
  return (
  <div>
    <h2>Education Overview</h2>
    <EduOver 
    eduArray={eduArray} 
    handleEdit={handleEdit} 
    moveUpDown={moveUpDown}
    />
  </div>
  )
}
export default Overview;
