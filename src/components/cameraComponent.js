import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"

class CameraComponent extends Component {

    getHost = () => { 
        return "http://" + localStorage.getItem("host") + ":8080/stream_simple.html";
    }

    render() {
        return <>
            <div id="cameraBox" className="standardBox">
                <div className="header">Camera Feed</div>
                    <iframe src={this.getHost()}></iframe>
                <br /><br /><br />
            </div>
        </>
    }
}

export default CameraComponent