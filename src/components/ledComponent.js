import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { APIHandler } from "../api/apiHandler"

class LEDComponent extends Component {

    switchLED = (state) => {
        let img = document.getElementById("ledImage");

        if (state === 1) {
            img.src = require("../images/ledOn.png")
        }
        else {
            img.src = require("../images/led.png")
        }

        APIHandler.callApi(
            `switchLED/${state}`,
            null,
            "PUT",
            null,
            localStorage.getItem('token')
        )
    }

    blink = () => {
        let period_duration = document.getElementById("period_duration").value
        let period_count = document.getElementById("period_count").value
        let img = document.getElementById("ledImage");

        document.getElementById("off").disabled = true
        document.getElementById("on").disabled = true

        document.getElementById("off").checked = true;
        
        document.getElementById("off").onchange = () => this.switchLED(0)
        document.getElementById("on").onchange = () => this.switchLED(1)

        setTimeout(function() {
            document.getElementById("off").disabled = false
            document.getElementById("on").disabled = false
        }, period_duration * 1000 * period_count)

        for (let i = 0; i < period_count; i++) {    
            setTimeout(function() {
                img.src = require("../images/ledOn.png")
            }, i * period_duration * 1000)
            setTimeout(function() {
                img.src = require("../images/led.png")
            }, period_duration * 500 + i * period_duration * 1000)
        }

        APIHandler.callApi(
            "tickLED",
            JSON.stringify({period_duration, period_count}),
            "POST",
            null,
            localStorage.getItem('token')
        )
    }

    render() {
        return <>
            <div id="ledBox" className="standardBox">
                <div className="header">LED</div>
                <div className="ledInnerBlock"> 
                    <img id="ledImage" src={require("../images/led.png")} />
                </div>
                <div className="ledInnerBlock">
                    <input type="radio" name="ledState" id="off" onChange={() => this.switchLED(0)}/>
                    <label htmlFor="off">OFF</label>
                    <input type="radio" name="ledState" id="on" onChange={() => this.switchLED(1)} />
                    <label htmlFor="on">ON</label>
                    <br />
                    <hr />
                    <br />
                    Period duration (s):<input className="ledBlinkInput" type="text" id="period_duration" size="5"/>
                    Repeats:<input className="ledBlinkInput" type="text" id="period_count" size="2"/>
                    <br /><br />
                    <button className="btn btn-primary" onClick={this.blink}>Blink</button>
                </div>
            </div>
        </>
    }
}

export default LEDComponent