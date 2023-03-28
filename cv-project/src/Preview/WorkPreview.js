import { Component } from "react";

export default class WorkPreview extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { workArray } = this.props
    return (
      <div>
        {workArray.length < 1 && <div>
        <section className="section-class">
          <div className="section-row">
            <h4>Software Engineer</h4>
            <div className="row">
              <h5>A Software Company |</h5>
              <h5> | 2018 - Present</h5>
            </div> 
          </div>
          <div>
            <p>Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.</p>
          </div>
        </section>
      </div>
  }
          {workArray.map(item => 
          <div key={item.id}>
             <section className="section-class">
             <div className="section-row">
              <h4>{item.positionTitle}</h4>
              <div className="row">
                <h5>{item.companyName} |</h5>
                <h5> | {item.workDates}</h5>
              </div> 
            </div>
            <div>
            <p>{item.mainTasks}</p>
          </div>
          </section>
        </div>
        )}
      </div>
      )}}
      
    