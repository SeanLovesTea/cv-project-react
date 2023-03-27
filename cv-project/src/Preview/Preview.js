import { Component } from "react";

export default class Preview extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { infoArray, eduArray, workArray } = this.props
    return (
      <div>
        <header>
          <h2>This is the Preview</h2>
        </header>
          <h3>General Info</h3>

        {infoArray.map(item => 
        <div key={item.id}>
          <section>
            <div>{item.fullName}</div>
            <div>{item.email}</div>
            <div>{item.phoneNumber}</div>
            <div>{item.statement}</div>
          </section>
        </div>
        )}
        {eduArray.map(item => 
        <div key={item.id}>
          <section>
            <div>{item.schoolName}</div>
            <div>{item.schoolTitle}</div>
            <div>{item.schoolDates}</div>
          </section>
        </div>
        )}
        {workArray.map(item => 
        <div key={item.id}>
          <section>
            <div>{item.companyName}</div>
            <div>{item.positionTitle}</div>
            <div>{item.mainTasks}</div>
            <div>{item.workDates}</div>
          </section>
        </div>
        )}
      </div>
      
    )
  }
}