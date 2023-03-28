import { Component } from "react";

export default class InfoPreview extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { infoArray } = this.props
    return (
      <div>
        {infoArray.length < 1 && <div>
        <header>
          <div>
            <h2>Joe Bloggs</h2>
            <h3>Software Developer</h3>
          </div>
          <div>
            <h4>086 1235678</h4>
            <h4>fakemail@gmail.com</h4>
            <h4>Glasgow, UK</h4>
          </div>
        </header>
        <div className="border-line"></div> 
        <section>
          <h3>Personal Statement</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section> 
      </div>
  }
        
          {infoArray.map(item => 
          <div key={item.id}>
          <header>
            <div>
              <h2>{item.fullName}</h2>
              <h3>Software Developer</h3>
            </div>
            <div>
              <h4>{item.phoneNumber}</h4>
              <h4>{item.email}</h4>
              <h4>Glasgow, UK</h4>
            </div>
          </header>
          <div className="border-line"></div> 
          <section>
            <h3>Personal Statement</h3>
            <p>
            {item.statement}
            </p>
          </section> 
        </div>
        )}
      </div>
      )}}
      
    