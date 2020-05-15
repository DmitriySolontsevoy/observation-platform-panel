import React, { Component } from "react"
import "./css/App.css"
import LoginComponent from "./components/loginComponent"
import LEDComponent from "./components/ledComponent"
import ServoComponent from "./components/servoComponent"
import LogoutComponent from "./components/logoutComponent"
import CameraComponent from "./components/cameraComponent"
import CompassComponent from "./components/compassComponent"
import GPSComponent from "./components/gpsComponent"

class App extends Component {

  state = { currentUserRole: localStorage.getItem('role') || "" }

  callback = (childData) => this.setState(childData);

  render() {
      return (
          <>
            <div className="header">
              OBSERVATION PLATFORM CONTROL PANEL
            </div>

            {!this.state.currentUserRole
                ? <LoginComponent parentCallback = {this.callback} dataFromParent = {this.state}/>
                : null}
            {this.state.currentUserRole === "admin"
                ? <> 
                    <LEDComponent />
                    <ServoComponent />
                    <CameraComponent />
                    <CompassComponent />
                    <GPSComponent />
                    <LogoutComponent parentCallback = {this.callback} dataFromParent = {this.state}/>
                  </>
                : null}
            {this.state.currentUserRole === "user"
                ? <>
                    <CameraComponent />
                    <LogoutComponent parentCallback = {this.callback} dataFromParent = {this.state}/>
                  </>
                : null}            
          </>
      );
  }
}

export default App;
