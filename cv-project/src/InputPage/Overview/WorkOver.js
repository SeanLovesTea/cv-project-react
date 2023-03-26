import { Component } from "react";

export default class WorkOver extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const { workArray, moveUpDown, handleEdit, handleDelete } = this.props
    return (
      <div>
         {workArray.map(item => {
          return (
          <div key={item.id}>
            <label>Work </label>
            <ul id={item.id}>
              <li>Company Name : {item.companyName}</li>
              <li>Position Title : {item.positionTitle}</li>
              <li>Main Tasks : {item.mainTasks}</li>
              <li>Work Dates : {item.workDates}</li>
              <button onClick={(e) => handleEdit(e, 'work')}> Edit </button>
              <button onClick={(e) => moveUpDown(e, 'up', 'work')}> Up</button>
              <button onClick={(e) => moveUpDown(e, 'down', 'work')}> Down </button>
              <button onClick={(e) => handleDelete(e, 'work')}> Delete </button>
            </ul> 
        </div>)
        })}
      </div>
    )
  }
}
