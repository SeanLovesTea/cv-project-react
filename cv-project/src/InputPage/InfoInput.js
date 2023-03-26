import { React, Component } from "react"

export default class EduInput extends Component {
  constructor(props){
    super(props)
  }
 render() {

  const {eduSection: infoSection, handleChange, onSubmit} = this.props

   return (
     <form>
      <label>Enter General Information</label>
      <input 
      value={infoSection.fullName}
      type="text" 
      id="fullNameInput"
      name="fullName"
      onChange={(e) => handleChange(e, 'info')}
      placeholder="Full Name"
      />
      <input 
      value={infoSection.email}
      type="text" 
      id="emaileInput"
      onChange={(e) => handleChange(e, 'info')}
      name="email"
      placeholder="Email"
      />
      <input 
      value={infoSection.phoneNumber}
      type="text" 
      id="phoneNumberInput"
      onChange={(e) => handleChange(e, 'info')}
      name="phoneNumber"
      placeholder="Phone Number"
      />
      <button 
      onClick={(e) => onSubmit(e, 'info')}
      type="submit"
      >Add</button>
   </form>
   )
 }
}


