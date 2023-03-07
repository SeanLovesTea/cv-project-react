import React from 'react'

const Form_work = (props) => {
  
  const { work, workArray, handleChange, onSubmitTask ,onClickDelete } = props

  return (
    <div className='form-section'>
      <form id="work">
          <label htmlFor="taskInput">Work</label>
          <input 
          placeholder="Company name"
          value={work.companyName}
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
          id='add'
          >Add</button>
        </form>
    
      {workArray.map(item => {
        return (
        <div>
        <ul key={item.id} >
          <li >Company Name: {item.companyName} </li>
          <li >Title: {item.title} </li> 
          <li >Tasks: {item.tasks} </li>
          <li >Dates: {item.dates} </li>
        </ul>
        <div 
          className='button-delete' 
          data_id={item.id}        
          data_name="workArray">

          <button onClick={onClickDelete} id='del'>Delete</button>
          <button id='edit'>Edit</button>

        </div>
      </div>
        )
      })}
   
    </div>
  )
}
export default Form_work

