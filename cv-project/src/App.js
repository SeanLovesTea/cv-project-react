import React, { Component } from 'react'
import Overview from './components/Overview'
import {nanoid} from "nanoid";
import Education from './components/Education';
import EduInput from './InputPage/EduInput'
import Preview from './Preview/Preview';

class App extends Component {
  constructor() {
    super()

    this.state = {
      eduSection: {
        schoolName: '',
        schoolTitle: '',
        schoolDates: '',
        id: nanoid()
      },
      eduArray: [],
    }
    
  }
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      eduSection : {
        ...this.state.eduSection,
        [name] : value,
        id: this.state.eduSection.id
      }
    })
  }
 
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      eduArray: this.state.eduArray.concat(this.state.eduSection),
      eduSection: { 
        schoolName: '',
        schoolTitle: '',
        schoolDates: '',
        id: nanoid(),
      }
    })
    console.log(this.state.eduArray)
  }
  
  handleEdit = (e) => {
    const sectionsArray = this.state.eduArray
    const targetId = e.target.parentNode.id
    const targetTaskIndex = sectionsArray.findIndex(task => task.id === targetId)
    const targetTask = sectionsArray[targetTaskIndex]

    this.setState({
      eduSection : {
        ...this.state.eduSection,
        schoolName : targetTask.schoolName,
        schoolTitle : targetTask.schoolTitle,
        schoolDates : targetTask.schoolDates,
        id: this.state.eduSection.id
      }
    })
    sectionsArray.splice(targetTaskIndex, 1)
  }

  moveUpDown= (e, direction) => {
    const sectionsArray = this.state.eduArray
    const targetId = e.target.parentNode.id
    const targetTaskIndex = sectionsArray.findIndex(task => task.id === targetId)

    let startIndex = targetTaskIndex
    const element = sectionsArray[startIndex];
    sectionsArray.splice(startIndex, 1);
    startIndex = direction === 'up' ? (startIndex + 1) : (startIndex - 1)
    sectionsArray.splice(startIndex, 0, element)
    this.setState(sectionsArray)
  }

  render() {
    
    const { eduSection, eduArray } = this.state
    console.log(eduArray)

    return (
      <div>
        <EduInput 
        eduSection={eduSection} 
        handleChange={this.handleChange}
        onSubmit={this.onSubmit}
        />
        <Education 
        tasks={eduArray} 
        handleChange={this.handleChange}
        />
        <Overview 
        tasks={eduArray} 
        handleEdit={this.handleEdit}
        moveUpDown={this.moveUpDown}
         />
        <Preview eduArray={eduArray}/>
      </div>
    )
  }
}

export default App