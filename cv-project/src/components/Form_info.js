import React from 'react'

const Form_info = (props) => {
  
  const { info, infoArray, handleChange, onSubmitTask} = props
  console.log(infoArray , "============== inside info comp")
  const targetObj = infoArray.length - 1
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
          <input 
          placeholder="location"
          value={info.location}
          type="text" 
          onChange={handleChange}
          name="location"
           />
          <input 
          placeholder="Profession"
          value={info.job}
          type="text" 
          onChange={handleChange}
          name="job"
           />
          <textarea 
          placeholder="Personal statement"
          value={info.statement}
          type="text" 
          onChange={handleChange}
          name="statement"
           />
          <button 
          onClick={(e) => onSubmitTask(e, "info", "infoArray")}
          type="submit"
          >Add Task</button>
        </form>

     
    {infoArray[0] && 
      <ul>
          <li key={infoArray[targetObj].id}>
          First name : {infoArray[targetObj].firstName} <br></br>  
          Last name : {infoArray[targetObj].lastName} <br></br>  
          Email : {infoArray[targetObj].email} <br></br> 
          Phone No : {infoArray[targetObj].phoneNumber} <br></br>
          Location : {infoArray[targetObj].location} <br></br>
          Job : {infoArray[targetObj].job} <br></br>
          Statement : {infoArray[targetObj].statement} <br></br>
          </li>
      
    </ul>}
    </div>
  )
}
export default Form_info

