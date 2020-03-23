import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { APIHandler } from "../api/apiHandler"

class ServoComponent extends Component {

    btnClick = (rangeSlider, url) => {
       let range = document.getElementById(rangeSlider)
       
       APIHandler.callApi(
           url + range.value,
           null,
           "PUT",
           null,
           localStorage.getItem("token")
        )
    }

    render() {
        return <>
            <div id="servoBox" className="standardBox">
                <div className="header">Servos</div>
                <div className="servoInnerBlock">
                    <img id="servoImage" src={require("../images/sg90.png")} />
                    0°<input id='range1' type="range" max="180"/>180°<br /><br />
                    <input className="btn btn-primary" type="button" value="Rotate" onClick={() => this.btnClick('range1', "rotateX/")}/>
                </div>
                <div className="servoInnerBlock">
                    <img id="servoImage" src={require("../images/sg90.png")} />
                    0°<input id='range2' type="range" max="90"/>90°<br /><br />
                    <input className="btn btn-primary" type="button" value="Rotate" onClick={() => this.btnClick('range2', "rotateY/")}/>
                </div>   
            </div>
        </>
    }
}

export default ServoComponent