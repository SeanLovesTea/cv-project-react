import React, { Component } from 'react'
import Overview from './components/Overview'
import {nanoid} from "nanoid";

class App extends Component {
  constructor() {
    super()

    this.state = {
      task: {
         text: '',
         id: nanoid()

        },
      tasks: [],
    }
    
  }
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: nanoid(),
      }
    })
  }
  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input 
          value={task.text}
          type="text" 
          id="taskInput"
          onChange={this.handleChange}
           />
          <button 
          onClick={this.onSubmitTask}
          type="submit"
          >Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }
}

export default App