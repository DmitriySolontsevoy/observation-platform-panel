import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { callApi } from "../api"

class LEDComponent extends Component {

    switchLED = (state) => {
        callApi(
            `switchLED/${state}`,
            null,
            "PUT",
            null,
            localStorage.getItem('token')
        )
    }

    render() {
        return <>
            <div id="ledBox">
                <div className="header">LED</div>
                <img id="ledImage" src={require("../images/led.png")} />
                <input type="radio" name="ledState" id="off" onChange={() => this.switchLED(0)}/>
                <label htmlFor="off">OFF</label>
                <input type="radio" name="ledState" id="on" onChange={() => this.switchLED(1)} />
                <label htmlFor="on">ON</label>
            </div>
        </>
    }
}

export default LEDComponent