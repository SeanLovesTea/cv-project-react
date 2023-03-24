import { Component } from "react";

export default class Preview extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { eduArray } = this.props
    return (
      <div>
        <h2>This is the Preview</h2>
        <header>
          <h3>General Info</h3>
        </header>

        {eduArray.map(item => 
        <div key={item.id}>
          <section>
            <div>{item.schoolName}</div>
            <div>{item.schoolTitle}</div>
            <div>{item.schoolDates}</div>
          </section>
        </div>
        )}
      </div>
      
    )
  }
}