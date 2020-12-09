import React from "react";
import "./cards.css";
import CountUp from "react-countup";
const Cards = ({data:{confirmed , recovered , deaths , lastUpdate}}) =>
{   
    if(!confirmed)
    {
        return 'Loading...';
    }
    return(
        
        <div className = "card">
        <div className = "cardA">
        <h2 style = {{ marginLeft: "1cm" , fontFamily: "cursive"}}>  Active cases <CountUp start = {0} end = {confirmed.value} duration = {2.5} seprator = ","/></h2>
        </div> 
        <h2 style = {{marginTop: "1cm" , marginLeft: "1cm"  , fontFamily: "cursive"}}> Total recovered <CountUp start = {0} end = {recovered.value} duration = {2.5} seprator = ","/></h2>
        <h2  style = {{marginTop: "1cm" , marginLeft: "1cm" , fontFamily: "cursive"}}> Total deaths <CountUp start = {0} end = {deaths.value} duration = {2.5} seprator = ","/></h2>
        </div>
        )
}
export default Cards;