import { React, Component } from "react"

export default class EduInput extends Component {
  constructor(props){
    super(props)
  }
 render() {

  const {eduSection, handleChange, onSubmit} = this.props

   return (
     <form>
      <label>Enter Education</label>
      <input 
      value={eduSection.schoolName}
      type="text" 
      id="schoolNameInput"
      name="schoolName"
      onChange={(e) => handleChange(e, 'edu')}
      placeholder="School Name"
      />
      <input 
      value={eduSection.schoolTitle}
      type="text" 
      id="schoolTitleInput"
      onChange={(e) => handleChange(e, 'edu')}
      name="schoolTitle"
      placeholder="Course Title"
      />
      <input 
      value={eduSection.schoolDates}
      type="text" 
      id="schoolDatesInput"
      onChange={(e) => handleChange(e, 'edu')}
      name="schoolDates"
      placeholder="Course Dates"
      />
      <button 
      onClick={(e) => onSubmit(e, 'edu')}
      type="submit"
      >Add</button>
   </form>
   )
 }
}


