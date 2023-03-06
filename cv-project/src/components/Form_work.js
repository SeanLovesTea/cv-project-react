import React from 'react'

const Form_work = (props) => {
  const { work, workArray, handleChange, onSubmitTask } = props
  
  return (
    <div>
      <form id="work">
          <label htmlFor="taskInput">Work</label>
          <input 
          placeholder="Company name"
          value={work.schoolName}
          type="text" 
          onChange={handleChange}
          name="companyName"
           />
          <input 
          placeholder="Position title"
          value={work.title}
          type="text" 
          onChange={handleChange}
          name="title"
           />
          <input 
          placeholder="Main tasks"
          value={work.tasks}
          type="text" 
          onChange={handleChange}
          name="tasks"
           />
          <input 
          placeholder="dates"
          value={work.dates}
          type="text" 
          onChange={handleChange}
          name="dates"
           />
          <button 
          onClick={(e) => onSubmitTask(e, "work", "workArray")}
          type="submit"
          >Add Task</button>
        </form>
    <ul>
      {workArray.map(item => {
        return <li key={item.id}>
        Name: {item.companyName}  <br></br> 
        Title: {item.title}  <br></br> 
        Tasks: {item.tasks}  <br></br> 
        Dates: {item.dates}
        </li>
      })}
    </ul>
    </div>
  )
}
export default Form_work

