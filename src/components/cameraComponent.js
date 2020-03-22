import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { callApi } from "../api"

class CameraComponent extends Component {

    btnClick = (rangeSlider) => {
       callApi(
           "stream",
           null,
           "GET",
           null,
           localStorage.getItem("token")
       )
    }

    render() {
        return <>
            <div id="cameraBox">
                <div className="header">Camera Feed</div>
                <br /><br /><br /><br />
            </div>
        </>
    }
}

export default CameraComponent