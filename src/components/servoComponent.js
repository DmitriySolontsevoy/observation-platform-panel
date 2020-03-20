import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { callApi } from "../api"

class ServoComponent extends Component {

    btnClick = (rangeSlider, url) => {
       let range = document.getElementById(rangeSlider)
       
       callApi(
           url + range.value,
           null,
           "PUT",
           null,
           localStorage.getItem("token")
       )
    }

    render() {
        return <>
            <div id="servoBox">
                <div className="header">Servos</div>
                <div className="servoInnerBlock">
                    <img id="servoImage" src={require("../images/sg90.png")} />
                    0°<input id='range1' type="range" max="180"/>180°<br />
                    <input type="button" value="Rotate" onClick={() => this.btnClick('range1', "rotateX/")}/>
                </div>
                <div className="servoInnerBlock">
                    <img id="servoImage" src={require("../images/sg90.png")} />
                    0°<input id='range2' type="range" max="90"/>90°<br />
                    <input type="button" value="Rotate" onClick={() => this.btnClick('range2', "rotateY/")}/>
                </div>   
            </div>
        </>
    }
}

export default ServoComponent