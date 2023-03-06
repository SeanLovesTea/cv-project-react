import React from 'react'

const Form_info = (props) => {
  
  const { info, infoArray, handleChange, onSubmitTask} = props
  console.log(infoArray , "============== inside info comp")
  return (
    <div>
    <form id="info">
          <label htmlFor="taskInput">General info</label>
          <input 
          placeholder="first name"
          value={info.firstName}
          type="text" 
          onChange={handleChange}
          name="firstName"
           />
          <input 
          placeholder="last name"
          value={info.lastName}
          type="text" 
          onChange={handleChange}
          name="lastName"
           />
          <input 
          placeholder="email"
          value={info.email}
          type="email" 
          onChange={handleChange}
          name="email"
           />
          <input 
          placeholder="phone number"
          value={info.phoneNumber}
          type="tel" 
          onChange={handleChange}
          name="phoneNumber"
           />
          <button 
          onClick={(e) => onSubmitTask(e, "info", "infoArray")}
          type="submit"
          >Add Task</button>
        </form>

    <ul>
      {infoArray.map(item => {
        return <li key={item.id}>
          First name:{item.firstName} <br></br>  
          Last name:{item.lastName} <br></br>  
          Email:{item.email} <br></br> 
          Phone No.{item.phoneNumber} <br></br></li>
      })}
    </ul>
    </div>
  )
}
export default Form_info

