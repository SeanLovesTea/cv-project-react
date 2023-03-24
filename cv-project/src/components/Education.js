import React from "react";

const Education = (props) => {
  const { tasks, handleChange } = props;

  return (
  <div>
      {/* {tasks.map((task) => {
        return <div 
        key={task.id}
        id={task.id}
        >

        <label>Education </label>
        <input 
          
          type="text" 
          id="schoolNameInput"
          name="schoolName"
          placeholder="School Name"
          onChange={handleChange}
           />
           <input 
          // value={task.schoolTitle}
          type="text" 
          id="schoolTitleInput"
          onChange={handleChange}
          name="schoolTitle"
          placeholder="Course Title"
           />
           <input 
          // value={task.schoolDate}
          type="text" 
          id="schoolDateInput"
          onChange={handleChange}
          name="schoolDate"
          placeholder="Course Dates"
           />
          </div>
      })} */}
  </div>
  )
}

export default Education;