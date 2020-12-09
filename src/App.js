import React from "react";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header";
import {fetchData} from "./api";
import "./Components/Cards/cards.css"
import Charts from "./Components/Charts/Charts.jsx"
import CountryPicker from "./Components/CountryPicker/CountryPicker";
class App extends React.Component
{   
    state= {
        data: {},
        country: "",
    }
    async componentDidMount(){
        const fetchedData = await fetchData()
       
        this.setState({data: fetchedData})
        
        
    }

    handleCountryChange = async (country) =>
    {  console.log(country)
       const fetchedData = await fetchData(country);  
       
       this.setState({data: fetchedData , country: country})
    }
   
    render(){
        const {data} = this.state
        return(
        <div>
         <Header/>
         
         <Cards data = {data}  />
       
         <br/>
         <br/>
         <br/>
         <CountryPicker handleCountryChange = {this.handleCountryChange}/>
         <br/>
         <Charts/>
        </div>
    )
    }
}

export default App;