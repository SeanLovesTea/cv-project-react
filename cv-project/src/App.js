import React, { Component } from 'react'
import Overview from './InputPage/Overview/Overview'
import {nanoid} from "nanoid";
import Education from './components/Education';
import EduInput from './InputPage/EduInput'
import WorkInput from './InputPage/WorkInput'
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

      workSection: {
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        workDates: '',
        id: nanoid()
      },
      workArray: [],
    }
  }
  handleChange = (e, sectionName) => {
    const {name, value} = e.target
    const section = sectionName + 'Section'
    this.setState({
      [section] : {
        ...this.state[section],
        [name] : value,
        id: this.state[section].id
      }
    })
  }
 
  onSubmit = (e, sectionName) => {
    e.preventDefault()
    if(sectionName === 'edu'){
      this.setState({
        eduArray: this.state.eduArray.concat(this.state.eduSection),
        eduSection: { 
          schoolName: '',
          schoolTitle: '',
          schoolDates: '',
          id: nanoid(),
        }
      })
    }else if(sectionName === 'work'){
      this.setState({
        workArray: this.state.workArray.concat(this.state.workSection),
        workSection: { 
          companyName: '',
          positionTitle: '',
          mainTasks: '',
          workDates: '',
          id: nanoid(),
        }
      })
    }
    console.log(this.state.eduArray)
  }
  
  handleEdit = (e, sectionName) => {
    const sectionsArray = sectionName === 'edu' ? 
    this.state.eduArray : this.state.workArray

    console.log(sectionsArray)
    const targetId = e.target.parentNode.id
    console.log(targetId, "====targetid=====")
    console.log(e.target.parentNode.parentNode, "====e=====")
    const targetTaskIndex = sectionsArray.findIndex(task => task.id === targetId)
    const targetTask = sectionsArray[targetTaskIndex]
    if(sectionName === 'edu'){
      this.setState({
        eduSection : {
          ...this.state.eduSection,
          schoolName : targetTask.schoolName,
          schoolTitle : targetTask.schoolTitle,
          schoolDates : targetTask.schoolDates,
          id: this.state.eduSection.id
        }
      })
    }else if(sectionName === 'work'){
      this.setState({
        workSection : {
          ...this.state.workSection,
          companyName : targetTask.companyName,
          posisitionTitle : targetTask.posisitionTitle,
          mainTasks : targetTask.mainTasks,
          workDates : targetTask.workDates,
          id: this.state.workSection.id
        }
      })
    }
    sectionsArray.splice(targetTaskIndex, 1)
  }

  moveUpDown= (e, direction) => {
    const sectionsArray = this.state.eduArray
    const targetId = e.target.parentNode.id
    const targetTaskIndex = sectionsArray.findIndex(item => item.id === targetId)
    console.log(sectionsArray, "====sectionarray====")
    console.log(targetTaskIndex, "====argetTaskIndex====")
    console.log(targetId, "====stargetId====")
    console.log(e.target.parentNode.id, "====id====")
    let startIndex = targetTaskIndex
    const element = sectionsArray[startIndex];
    sectionsArray.splice(startIndex, 1);
    startIndex = direction === 'up' ? (startIndex + 1) : (startIndex - 1)
    sectionsArray.splice(startIndex, 0, element)
    this.setState(sectionsArray)
  }

  render() {
    
    const { eduSection, eduArray, workSection, workArray } = this.state

    return (
      <div className='main'>
        <div className='input-page'>
          <div className='input-container'>
            <EduInput 
              eduSection={eduSection} 
              handleChange={this.handleChange}
              onSubmit={this.onSubmit}
              />
            <WorkInput
              workSection={workSection}
              handleChange={this.handleChange}
              onSubmit={this.onSubmit}
              />
          </div>
          <div className='input-overview'>
            <Overview 
              eduArray={eduArray} 
              workArray={workArray}
              handleEdit={this.handleEdit}
              moveUpDown={this.moveUpDown}
              />
          </div>
        </div>
        <div className='preview-page'> 
          <Preview eduArray={eduArray}
          />

        </div>
      </div>
    )
  }
}

export default App