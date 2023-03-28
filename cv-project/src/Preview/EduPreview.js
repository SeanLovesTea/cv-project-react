import { Component } from "react";

export default class EduPreview extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { eduArray } = this.props
    return (
      <div>
        {eduArray.length < 1 && <div>
        <section className="section-class">
          <div className="section-row">
            <h4>Game Development w/ C# and Unity</h4>
            <div className="row">
              <h5>Udemy |</h5>
              <h5> | 2018 - 2019</h5>
            </div> 
          </div>
        </section>
      </div>
  }

          {eduArray.map(item => 
          <div key={item.id}>
             <section className="section-class">
             <div className="section-row">
              <h4>{item.schoolTitle}</h4>
              <div className="row">
                <h5>{item.schoolName} |</h5>
                <h5> | {item.schoolDates}</h5>
              </div> 
            </div>
          </section>
        </div>
        )}
      </div>
      )}}
      
    