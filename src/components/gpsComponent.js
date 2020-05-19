import React, { Component } from "react"
import "../css/bootstrap.min.css"
import "../css/App.css"
import { APIHandler } from "../api/apiHandler"

class GPSComponent extends Component {

    callback = (httpRequest) => {
        if (httpRequest.currentTarget.readyState === 4) {
            let parsed = JSON.parse(httpRequest.currentTarget.responseText)
            this.latitude = parsed.latitude + 0.0102
            this.longitude = parsed.longitude + 0.1312

            document.getElementById("gpsFrame").setAttribute("src",
            "https://www.openstreetmap.org/export/embed.html?bbox="+(this.longitude-0.005)+"%2C"+(this.latitude-0.00025)+"%2C"+(this.longitude+0.005)+"%2C"+(this.latitude+0.00025)+"&amp;layer=mapnik&marker="+this.latitude+"%2C"+this.longitude)
        }
    }

    getMap = () => {
        APIHandler.callApi(
            "gps",
            null,
            "GET",
            this.callback,
            localStorage.getItem('token')
        )
    }

    render() {
        this.getMap()

        return <>
            <div id="gpsBox" className="standardBox">
                <div className="header">GPS Data</div>
                <iframe id="gpsFrame" scrolling="no" src={this.getMap()}></iframe>
            </div>
        </>
    }
}

export default GPSComponent