import { Component } from "react";

export default class InfoOver extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const { infoArray, handleEdit, handleDelete } = this.props
    return (
      <div>
         {infoArray.map(item => {
          return (
          <div key={item.id}>
            <label>General Information </label>
            <ul id={item.id}>
              <li>Full Name : {item.fullName}</li>
              <li>Email : {item.email}</li>
              <li>Phone Number : {item.phoneNumber}</li>
              <li>Personal Statement : {item.statement}</li>
              <button onClick={(e) => handleEdit(e, 'info')}> Edit </button>
              <button onClick={(e) => handleDelete(e, 'info')}> Delete </button>
            </ul> 
        </div>
        )
        })}
      </div>
    )
  }
}
