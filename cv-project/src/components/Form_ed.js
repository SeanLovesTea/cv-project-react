import React from 'react'

const Form_ed = (props) => {
  const { education,educationArray, handleChange, onSubmitTask } = props
  
  return (
    <div>
      <form id="education">
          <label htmlFor="taskInput">Education</label>
          <input 
          placeholder="School name"
          value={education.schoolName}
          type="text" 
          onChange={handleChange}
          name="schoolName"
           />
          <input 
          placeholder="Course title"
          value={education.title}
          type="text" 
          onChange={handleChange}
          name="title"
           />
          <input 
          placeholder="dates"
          value={education.dates}
          type="text" 
          onChange={handleChange}
          name="dates"
           />
          <button 
          onClick={(e) => onSubmitTask(e, "education", "educationArray")}
          type="submit"
          >Add Task</button>
        </form>
    <ul>
      {educationArray.map(item => {
        return <li key={item.id}>
          Name: {item.schoolName}  <br></br> 
          Title: {item.title}  <br></br> 
          Dates: {item.dates}
          </li>
      })}
    </ul>
    </div>
  )
}
export default Form_ed