import { React, Component } from "react"

export default class InfoInput extends Component {
  constructor(props){
    super(props)
  }
 render() {

  const {infoSection, handleChange, onSubmit, infoArray} = this.props

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
      <textarea
      value={infoSection.statement}
      type="text" 
      id="statementInput"
      onChange={(e) => handleChange(e, 'info')}
      name="statement"
      placeholder="Personal Statement"
      />
      <button 
      onClick={(e) => onSubmit(e, 'info')}
      type="submit"
      >{infoArray.length > 0 ? "Replace" : "Add"}</button>
   </form>
   )
 }
}


