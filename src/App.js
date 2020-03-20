import React, { Component } from "react"
import "./css/App.css"
import LoginForm from "./components/loginForm"
import LEDComponent from "./components/ledComponent"
import ServoComponent from "./components/servoComponent"
import LogoutComponent from "./components/logoutComponent.js"

class App extends Component {

  state = { currentUserRole: localStorage.getItem('role') || ""}

  callback = (childData) => this.setState(childData);

  render() {
      return (
          <>
            <div className="header">
              OBSERVATION PLATFORM CONTROL PANEL
            </div>

            {!this.state.currentUserRole
                ? <LoginForm parentCallback = {this.callback} dataFromParent = {this.state}/>
                : null}
            {this.state.currentUserRole === "admin"
                ? <> <LEDComponent /> <ServoComponent /> <LogoutComponent parentCallback = {this.callback} dataFromParent = {this.state}/> </>
                : null}            
          </>
      );
  }
}

export default App;
