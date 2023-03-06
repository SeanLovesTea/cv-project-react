import React from "react"
import {nanoid} from 'nanoid'
import Form_info from "./components/Form_info"
import Form_ed from "./components/Form_ed"
import Form_work from "./components/Form_work"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      info: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        id: nanoid()
      },
      education: {
        schoolName: "",
        title: "",
        dates: "",
        id: nanoid()
      },
      work: {
        companyName: "",
        title: "",
        tasks: "",
        dates: "",
        id: nanoid()
      },
      infoArray : [],
      educationArray: [],
      workArray: []
    }

  }
  handleChange = (e) => {
    console.log(this.state.info)
    const section = e.target.parentNode.id
    console.log(section + " --- this is section")
    const { name , value} = e.target
    this.setState(prev => ({
      [section] : {
        ...prev[section],
        [name] : value,
        id: this.state[section].id
      }
    }))
  }
  
  onSubmitTask = (e, section, sectionArray) => {
    e.preventDefault()
    this.setState({
      [sectionArray]: this.state[sectionArray].concat(this.state[section]),
      [section]: { 
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        id: nanoid(),
        schoolName: "",
        title: "",
        dates: "",
        tasks: "",
      }
    })
  }

  render () {
    const { info, education, work, infoArray, educationArray, workArray} = this.state
    return (
      <div>
        
        <Form_info 
        info={info}
        infoArray={infoArray} 
        handleChange={this.handleChange}
        onSubmitTask={this.onSubmitTask}
        />

        <Form_ed 
        education={education}
        educationArray={educationArray}
        handleChange={this.handleChange}
        onSubmitTask={this.onSubmitTask}
        />

        <Form_work 
        work={work}
        workArray={workArray}
        handleChange={this.handleChange}
        onSubmitTask={this.onSubmitTask}
        />
      </div>
    )
  }
}
export default App
