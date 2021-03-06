import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { APIHandler } from "../api/apiHandler"

class LoginComponent extends Component {
    
    sendData = () => this.props.parentCallback(this.props.dataFromParent);

    login = (e) => {
        e.preventDefault();

        document.getElementById("logLogin").style.borderColor = "lightgrey";
        document.getElementById("logPassword").style.borderColor = "lightgrey";

        let login = document.getElementById("logLogin").value.trim();
        let password = document.getElementById("logPassword").value.trim();

        if (login && password)
        {
            this.authorizeUser(login, password);
            document.getElementById("logLogin").value = "";
            document.getElementById("logPassword").value = "";
        }
        else
        {
            if (!login)
            {
                document.getElementById("logLogin").style.borderColor = "red";
            }
        
            if (!password)
            {
                document.getElementById("logPassword").style.borderColor = "red";
            }
        }
    }

    callback = (httpRequest) => {
        if (httpRequest.currentTarget.readyState === 4) {
            let parsed = JSON.parse(httpRequest.currentTarget.responseText)
            this.props.dataFromParent.currentUserRole = parsed.role
            localStorage.setItem("token", parsed.token)
            localStorage.setItem("role", parsed.role)
            this.sendData();
        }
    }

    authorizeUser = (username, password) => {
        let host = document.getElementById("logHost").value
        let port = document.getElementById("logPort").value

        localStorage.setItem("host", host)
        localStorage.setItem("port", port)

        APIHandler.callApi(
            "login",
            JSON.stringify({username, password}),
            "POST",
            this.callback
        )
    }

    render() 
    {
        return (
            <>
                <div id="loginContainer">
                    <div className="myBox">
                        <form>
                            <div className="form-group">
                                <label>Host and port</label>
                                <input maxLength="30" type="text" className="form-control" id="logHost" placeholder="Enter host" /><br />
                                <input maxLength="5" type="text" className="form-control" id="logPort" placeholder="Enter port" />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input maxLength="30" type="text" className="form-control" id="logLogin" placeholder="Enter your username" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input maxLength="400" type="password" className="form-control" id="logPassword" placeholder="Enter your password" />
                            </div>
                            <input type="submit" value="Login" className="btn btn-primary" onClick={this.login} />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginComponent;