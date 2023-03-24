import { React, Component } from "react"

export default class WorkInput extends Component {
  constructor(props){
    super(props)
  }
 render() {

  const { workSection, handleChange, onSubmit} = this.props

   return (
     <form>
      <label>Enter Work</label>
      <input 
      value={workSection.companyName}
      type="text" 
      id="companyNameInput"
      name="companyName"
      onChange={(e) => handleChange(e, 'work')}
      placeholder="Company Name"
      />
      <input 
      value={workSection.positionTitle}
      type="text" 
      id="positionTitleInput"
      onChange={(e) => handleChange(e, 'work')}
      name="positionTitle"
      placeholder="Position Title"
      />
      <input 
      value={workSection.mainTasks}
      type="text" 
      id="mainTaskInput"
      onChange={(e) => handleChange(e, 'work')}
      name="mainTasks"
      placeholder="Main Tasks"
      />
      <input 
      value={workSection.workDates}
      type="text" 
      id="workDatesInput"
      onChange={(e) => handleChange(e, 'work')}
      name="workDates"
      placeholder="Work Dates"
      />
      <button 
      onClick={(e) => onSubmit(e, 'work')}
      type="submit"
      >Add</button>
   </form>
   )
 }
}


