import React, { Component } from 'react'

export default class Form extends Component {
  Info = () => {
    
  }
  Education = () => {

  }
  Work = () => {

  }
  render() {
    return(
      <div>
        <div className="container">
          <form>
            <div className='form-section'>
              <h1>Personal Details</h1>
                <input 
                type='text'
                placeholder='First name' 
                name='firstName'
                />
                <input 
                type='text'
                placeholder='Last name' 
                name='LastName'
                />
                <input 
                type='email'
                placeholder='Email' 
                name='email'
                />
                <input 
                type='tel'
                placeholder='Phone number' 
                name='phoneNumber'
                />
                <input 
                type='text'
                placeholder='Job title' 
                name='jobTitle'
                />
                <textarea 
                placeholder='Personal statement' 
                name='comment'
                />
            </div>
            <div className='form-section'>
              <h1>Education</h1>
                <input 
                type='text'
                placeholder='First name' 
                name='firstName'
                />
                <input 
                type='text'
                placeholder='School name' 
                name='schoolName'
                />
                <input 
                type='text'
                placeholder='Title of study' 
                name='titleOfStudy'
                />
                <input 
                type='text'
                placeholder='Date of study' 
                name='dateOfStudy'
                />
            </div>
            <div className='form-section'>
              <h1>Work Experience</h1>
                <input 
                type='text'
                placeholder='Company name' 
                name='companyName'
                />
                <input 
                type='text'
                placeholder='Position title' 
                name='positionTitle'
                />
                <input 
                type='text'
                placeholder='Main tasks' 
                name='mainTasks'
                />
                <input 
                type='text'
                placeholder='Dates worked' 
                name='datesWorked'
                />
            </div>
          </form>
        </div>
      </div>
      
    )
  }
}