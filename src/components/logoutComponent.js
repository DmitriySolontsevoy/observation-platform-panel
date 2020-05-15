import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { APIHandler } from "../api/apiHandler";

class LogoutComponent extends Component {
    
    sendData = () => this.props.parentCallback(this.props.dataFromParent);

    clearStorageAndLogout = () => {
        APIHandler.callApi(
            "logout",
            null,
            "DELETE",
            null,
            localStorage.getItem("token")
        )

        localStorage.removeItem("token")
        localStorage.removeItem("role")
        this.props.dataFromParent.currentUserRole = ""
        this.sendData()
    }

    render() {
        return <>
            <div>
                <br />
                <span onClick={this.clearStorageAndLogout}>Logout</span>
            </div>
        </>
    }
}

export default LogoutComponent