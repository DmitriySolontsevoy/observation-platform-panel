import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"

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
            <div>
                <br />
                <span onClick={this.clearStorage}>Logout</span>
            </div>
        </>
    }
}

export default LogoutComponent