import React from "react";
import EduOverview from "./EduOver"
import WorkOverview from "./WorkOver"

const Overview = (props) => {
  const { eduArray, workArray, handleEdit, moveUpDown, handleDelete } = props;
  
  return (
  <div>
    <h2>Education Overview</h2>
    <EduOverview 
    eduArray={eduArray} 
    handleEdit={handleEdit} 
    moveUpDown={moveUpDown}
    handleDelete={handleDelete}
    />
    <h2>Work Overview</h2>
    <WorkOverview
    workArray={workArray} 
    handleEdit={handleEdit} 
    moveUpDown={moveUpDown}
    handleDelete={handleDelete}
    />
  </div>
  )
}
export default Overview;
