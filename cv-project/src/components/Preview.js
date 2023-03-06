import React from 'react'

const Preview = (props) => {
 
    const { info, infoArray, educationArray, workArray } = props
    console.log(JSON.stringify(infoArray[0]) + " ===+++++===+++ inside preview")
    const targetObj = infoArray.length - 1
    const targetData = infoArray[targetObj]
    return (
      <div>
        Hi
        <div className='container'>
          
          <div className='preview--header'>
            <div>
              <h1>{targetData.firstName} {targetData.lastName}</h1>
              <h4>{targetData.job}</h4>
            </div>
            <div className='right-align'>
              <h5>{targetData.phoneNumber}</h5>
              <h5>{targetData.email}</h5>
              <h5>{targetData.location}</h5>
            </div>
          </div>

          <div className='divider'></div>

          <div className='preview--section'>
            <p className='statement'>{targetData.statement}</p>
          </div>
          
          <div className='preview--section'>
            <h3>Work Experience</h3>
            {workArray.map(item => {
              return ( 
              <div  key={item.id} className='section--item'>
                <div className='split-content'>
                  <div>
                    <h6>{item.companyName}</h6>
                  </div>
                  <div className='section-title'>
                    <h6 className='margin-right'>{item.title} |</h6>
                    <h6>{item.dates}</h6>
                  </div>
                </div>
                <p className='tasks'>{item.tasks}
                </p>
            </div>
              )
            }) 
            }

            <div className='section--item'>
              <div className='split-content'>
                <div>
                  <h6>Graduate Engineer</h6>
                </div>
                <div className='section-title'>
                  <h6 className='margin-right'>My First Company   |</h6>
                  <h6>2016-2018</h6>
                </div>
              </div>
              <p className='tasks'>Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.
              </p>
              </div>
            </div>

            <div className='preview--section'>
            <h3>Education</h3>

            {educationArray.map(item => {
              return  <div key={item.id} className='section--item'>
              <div className='split-content'>
                <div>
                  <h6>{item.title}</h6>
                </div>
                <div className='section-title'>
                  <h6 className='margin-right'>{item.schoolName} | </h6>
                  <h6>{item.dates}</h6>
                </div>
              </div>
            </div>
            })}
            {/* <div className='section--item'>
              <div className='split-content'>
                <div>
                  <h6>2D Game Development with Unity</h6>
                </div>
                <div className='section-title'>
                  <h6 className='margin-right'>Udemy    |</h6>
                  <h6>2019-2020</h6>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
            

          
    )
  }
export default Preview