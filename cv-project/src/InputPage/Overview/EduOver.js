import { Component } from "react";
import {BsArrowUp,BsArrowDown} from 'react-icons/bs'


export default class EduOver extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const { eduArray, moveUpDown, handleEdit } = this.props
    return (
      <div>
         {eduArray.map(item => {
          return (<div key={item.id}>
            <label>Education </label>
            <ul id={item.id}>
              <li>School Name : {item.schoolName}</li>
              <li>Course Title : {item.schoolTitle}</li>
              <li>Course Dates : {item.schoolDates}</li>
              <button onClick={(e) => handleEdit(e, 'edu')}> Edit </button>
              <button onClick={(e) => moveUpDown(e, 'up')}> up</button>
              <button onClick={(e) => moveUpDown(e, 'down')}> down </button>
            </ul> 
        </div>)
        })}
      </div>
    )
  }
}
