import React, { Component } from 'react'
import Overview from './Overview/Overview'
import {nanoid} from "nanoid";
import EduInput from './InputPage/EduInput'
import WorkInput from './InputPage/WorkInput'
import InfoInput from './InputPage/InfoInput'
import Preview from './Preview/Preview';

class App extends Component {
  constructor() {
    super()

    this.state = {
      infoSection: {
        fulllName: '',
        email: '',
        phoneNumber: '',
        statement: '',
        id: nanoid()
      },
      infoArray: [],

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
    console.log(this.state.infoArray, "====infoarray====")
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
    }
    if(sectionName === 'work'){
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
    if(sectionName === 'info'){
      if(this.state.infoArray.length > 0) {
        this.state.infoArray.splice(0, 1)
      }
      this.setState({
        infoArray: this.state.infoArray.concat(this.state.infoSection),
        infoSection: { 
          fullName: '',
          email: '',
          phoneNumber: '',
          statement: '',
          id: nanoid(),
        }
      })
    }
  }
  
  handleEdit = (e, sectionName) => {
    const sectionsArray = 
    sectionName === 'edu' ? this.state.eduArray : 
    sectionName === 'work' ? this.state.workArray :
    this.state.infoArray
    const targetId = e.target.parentNode.id
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
    }
    if(sectionName === 'work'){
      this.setState({
        workSection : {
          ...this.state.workSection,
          companyName : targetTask.companyName,
          positionTitle : targetTask.positionTitle,
          mainTasks : targetTask.mainTasks,
          workDates : targetTask.workDates,
          id: this.state.workSection.id
        }
      })
    }
    if(sectionName === 'info'){
      this.setState({
        infoSection : {
          ...this.state.infoSection,
          fullName : targetTask.fullName,
          email : targetTask.email,
          phoneNumber : targetTask.phoneNumber,
          statement : targetTask.statement,
          id: this.state.infoSection.id
        }
      })
    }
    sectionsArray.splice(targetTaskIndex, 1)
  }

  handleDelete = (e, sectionName) => {
    const sectionsArray = 
    sectionName === 'edu' ? this.state.eduArray : 
    sectionName === 'work' ? this.state.workArray :
    this.state.infoArray

    console.log(sectionsArray, "====thisstea=====")
    
    const targetId = e.target.parentNode.id
    const targetTaskIndex = sectionsArray.findIndex(task => task.id === targetId)
    
    sectionsArray.splice(targetTaskIndex, 1)
    this.setState(sectionsArray)
  }

  moveUpDown= (e, direction, sectionName) => {
    const sectionsArray = sectionName === 'edu' ? 
    this.state.eduArray : this.state.workArray
    const targetId = e.target.parentNode.id
    const targetTaskIndex = sectionsArray.findIndex(item => item.id === targetId)

    let startIndex = targetTaskIndex
    const element = sectionsArray[startIndex];
    sectionsArray.splice(startIndex, 1);
    startIndex = direction === 'up' ? (startIndex + 1) : (startIndex - 1)
    sectionsArray.splice(startIndex, 0, element)

    this.setState(sectionsArray)
  }

  render() {
    
    const { eduSection, eduArray, workSection, workArray, infoSection, infoArray } = this.state

    return (
      <div className='main'>
        <div className='input-page'>
          <div className='input-container'>
            <InfoInput 
              infoSection={infoSection} 
              infoArray={infoArray}
              handleChange={this.handleChange}
              onSubmit={this.onSubmit}
              />
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
              infoArray={infoArray}
              handleEdit={this.handleEdit}
              moveUpDown={this.moveUpDown}
              handleDelete={this.handleDelete}
              />
          </div>
        </div>
        <div className='preview-page'> 
          <Preview 
          eduArray={eduArray}
          workArray={workArray}
          infoArray={infoArray}
          />

        </div>
      </div>
    )
  }
}

export default App