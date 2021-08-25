import React from "react"
import Sidebar from "./Sidebar"

class Statistics extends React.Component{
    render(){
        return(
            <div  className="statistics">
                <div id="reviews">
                    Reviews
                    <h2>1,281</h2>
                </div>
                <div id="avRating">
                    Av Ratings
                    <h2>4,6</h2>
                </div>
                <div id="sntAnal">
                    Sentiment Analysis
                    <h2>960</h2>
                    <h2>122</h2>
                    <h2>321</h2>
                </div>
            </div>

        )
    }
}

export default Statistics