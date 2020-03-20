import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { throwStatement } from "@babel/types";

class LogoutComponent extends Component {
    
    sendData = () => this.props.parentCallback(this.props.dataFromParent);

    clearStorage = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        this.props.dataFromParent.currentUserRole = ""
        this.sendData()
    }

    render() {
        return <>
            <span onClick={this.clearStorage}>Logout</span>
        </>
    }
}

export default LogoutComponent