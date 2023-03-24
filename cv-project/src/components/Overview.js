import React from "react";

const Overview = (props) => {
  const { tasks, handleEdit, moveUpDown } = props;

  return (
  <div>
      {tasks.map((task) => {
        return( 
        <div key={task.id}>
          <label>Education </label>
          <ul id={task.id}>
            <li>{task.schoolName}</li>
            <li>{task.schoolTitle}</li>
            <li>{task.schoolDates}</li>
            <button onClick={handleEdit}> Edit </button>
            <button onClick={(e) => moveUpDown(e, 'up')}> Move Up </button>
            <button onClick={(e) => moveUpDown(e, 'down')}> Move Down </button>
          </ul>
        </div>
        )
      })}
  </div>
  )
}

export default Overview;