import React from 'react'

const Form_ed = (props) => {
  const { education,educationArray, handleChange, onSubmitTask, onClickDelete } = props
  
  return (
    <div className='form-section'>
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
          id='add'
          >Add </button>
        </form>
    
      {educationArray.map(item => {
        return (
          <div>
            <ul key={item.id}>
              <li>School Name: {item.schoolName}</li>  
              <li>itle: {item.title}</li>  
              <li>Dates: {item.dates}</li>
            </ul>

            <div 
              className='button-delete' 
              data_id={item.id}        
              data_name="educationArray">

              <button onClick={onClickDelete} id='del'>Delete</button>
              <button id='edit'>Edit</button>

            </div>
          </div>
        )
        })}
    </div>
  )
}
export default Form_ed