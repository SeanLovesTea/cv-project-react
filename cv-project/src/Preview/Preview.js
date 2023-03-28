import { Component } from "react";
import InfoPreview from "./InfoPreview";
import EduPreview from "./EduPreview";
import WorkPreview from "./WorkPreview";

export default class Preview extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { infoArray, eduArray, workArray } = this.props
    return (
      <div className="preview-page">
        <h2>This is the Preview</h2>
        <InfoPreview infoArray={infoArray}/>

        <section>
          <h3>Work Experience</h3>
          <WorkPreview workArray={workArray} />
        </section>
        
        <section>
          <h3>Education</h3>
          <EduPreview eduArray={eduArray} />
        </section>

      </div>
      
    )
  }
}