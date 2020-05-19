import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { APIHandler } from "../api/apiHandler"

class CompassComponent extends Component {

    callback = (httpRequest) => {
        if (httpRequest.currentTarget.readyState === 4) {
            let parsed = JSON.parse(httpRequest.currentTarget.responseText)
            document.getElementById("compassHandImage").style.transform = "translate(-50%, -50%) rotate(" + parsed.bearing + "deg)"
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.setAngle, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    setAngle = () => {
        APIHandler.callApi(
            "compass",
            null,
            "GET",
            this.callback,
            localStorage.getItem('token')
        )
    }

    render() {
        return <>
            <div id="compassBox" className="standardBox">
                <div className="header">Compass</div>
                <img id="compassScaleImage" src={require("../images/compassScale.png")} />
                <img id="compassHandImage" src={require("../images/arrow.png")} />
            </div>
        </>
    }
}

export default CompassComponent