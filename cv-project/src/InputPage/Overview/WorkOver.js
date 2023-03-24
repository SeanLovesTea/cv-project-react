import { Component } from "react";

export default class WorkOver extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const { workArray, moveUpDown, handleEdit } = this.props
    return (
      <div>
         {workArray.map(item => {
          return (<div key={item.id}>
            <label>Work </label>
            <ul id={item.id}>
              <li>Company Name : {item.companyName}</li>
              <li>Position Title : {item.positionTitle}</li>
              <li>Main Tasks : {item.mainTasks}</li>
              <li>Work Dates : {item.workDates}</li>
              <button onClick={(e) => handleEdit(e, 'work')}> Edit </button>
              <button onClick={(e) => moveUpDown(e, 'up', 'work')}> up</button>
              <button onClick={(e) => moveUpDown(e, 'down', 'work')}> down </button>
            </ul> 
        </div>)
        })}
      </div>
    )
  }
}
{/* <BsArrowUp/>
<BsArrowDown/> */}
// {eduArray.map(item => 
//   <div key={item.id}>
//     <section>
//       <div>{item.schoolName}</div>
//       <div>{item.schoolTitle}</div>
//       <div>{item.schoolDates}</div>
//     </section>
//   </div>
//   )}