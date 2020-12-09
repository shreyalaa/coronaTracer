import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import {Line  , Bar } from "react-chartjs-2";
import "./Charts.css";
const Charts = () =>
{   
    const [dailyData , setDailyData] = useState([]);

    useEffect(() =>
    {
        const fetchAPI = async () =>
        {
            setDailyData( await fetchDailyData())
        }
        
        fetchAPI();
    } )

    const lineChart = (
    
    dailyData.length ? (
       <Line 
       data = {{
           labels: dailyData.map(({date}) =>date),
           datasets: [{
                  data: dailyData.map(({confirmed}) =>confirmed),
                  label: "Infected",
                  borderColor: "#3333ff",
                  fill: true
                     },
                     {
                  data: dailyData.map(({deaths}) =>deaths),
                  label: "Deaths",
                  borderColor: "rgba(255 , 0, 0 , 0.5)",
                  fill: true
                     }]
       }}
       />): null
    )

    return(
       <div className  = "chart">

       {lineChart}
       </div>
    )
}

export default Charts;