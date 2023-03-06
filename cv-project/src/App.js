import React from "react"
import {nanoid} from 'nanoid'
import Form_info from "./components/Form_info"
import Form_ed from "./components/Form_ed"
import Form_work from "./components/Form_work"
import Preview from "./components/Preview"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      info: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        location: "",
        job: "",
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
      infoArray : [{
        firstName: "John",
        lastName: "Doe",
        email: "abc@123.com",
        phoneNumber: "086 123 456",
        location: "Glasgow, Uk",
        job: "Software Developer",
        statement:"Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi 234.",
        id: nanoid()
      }],
      educationArray: [],
      workArray: []
    }

  }
  handleChange = (e) => {
    const section = e.target.parentNode.id
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
        location: "",
        job: "",
        statement: "",
      },
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

        <Preview 
        info={info}
        infoArray={infoArray} 
        educationArray={educationArray}
        workArray={workArray}

        />

      </div>
    )
  }
}
export default App
