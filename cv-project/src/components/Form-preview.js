import React, { Component } from 'react'

export default class FormPreview extends Component {

  render() {
    return(
      <div>
        <div className="container preview">

          <div className='preview--header'>
            <div className='previer--header-left'>
              <h1>Joe Schmore</h1>
              <h3>Software Developer</h3>
            </div>
            <div className='previer--header-right'>
              <h6>0121237533</h6>
              <h6>joeshcmore@email.com</h6>
              <h6>Glasgow, Uk</h6>
            </div>
          </div>

          <div className='line-seperator'></div>

          <div className='preview--statement'>
          <h3>Personal statement</h3>
          Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.
          </div>

          <div className='preview--work'>
            <h3>Work Experience</h3>
            <div className='prev--title'>
              <h5>Software Engineer</h5>
              <h5>2018-Present</h5>
            </div>
            <div className='prev--title'>
              <h5>Junior Developer</h5>
              <h5>2016-2018</h5>
            </div>
          </div>

          <div className='preview--education'>
            <h3>Education</h3>
            <div className='prev--title'>
              <h5>2D Game Design with Unity:C#</h5>
              <h5>Udemy</h5>
            </div>
            <div className='prev--title'>
              <h5>Full Stack Web Development</h5>
              <h5>Odin Project</h5>
            </div>
            
          </div>
        </div>
      </div>
      
    )
  }
}