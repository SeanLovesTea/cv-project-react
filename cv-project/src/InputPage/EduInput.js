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
      onChange={handleChange}
      placeholder="School Name"
      />
      <input 
      value={eduSection.schoolTitle}
      type="text" 
      id="schoolTitleInput"
      onChange={handleChange}
      name="schoolTitle"
      placeholder="Course Title"
      />
      <input 
      value={eduSection.schoolDates}
      type="text" 
      id="schoolDatesInput"
      onChange={handleChange}
      name="schoolDates"
      placeholder="Course Dates"
      />
      <button 
      onClick={onSubmit}
      type="submit"
      >Add</button>
   </form>
   )
 }
}


