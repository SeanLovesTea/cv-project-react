import React from 'react'
import Form from './components/Form'
import FormPreview from './components/Form-preview'

export default class App extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Form />
        <FormPreview />
      </div>
    )
  }
}

