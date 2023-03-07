import React from 'react'

const Form_info = (props) => {
  
  const { info, infoArray, handleChange, onSubmitTask, onClickDelete} = props
  const targetObj = infoArray.length - 1
  return (
    <div className='form-section'>
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
          id='add'
          >Add</button>
        </form>

     
    {infoArray[0] && 
    <div>
      <ul className="info-list" >
          
          <li >First Name : <strong>{infoArray[targetObj].firstName}</strong> </li> 
          <li >Last name : <strong>{infoArray[targetObj].lastName}</strong> </li>  
          <li >Email : <strong>{infoArray[targetObj].email}</strong> </li> 
          <li >Phone No : <strong>{infoArray[targetObj].phoneNumber}</strong> </li>
          <li >Location : <strong>{infoArray[targetObj].location}</strong> </li>
          <li >Job : <strong>{infoArray[targetObj].job}</strong> </li>
          <li >Statement : <strong>{infoArray[targetObj].statement}</strong> </li>
      </ul>
      <div 
          className='button-delete' 
          data_id={info.id}        
          data_name="infoArray">

          <button onClick={onClickDelete} id='del'>Delete</button>
          <button id='edit'>Edit</button>

        </div>
    </div>
    }
    </div>
  )
}
export default Form_info

