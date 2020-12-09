import React from "react"
import "./Header.css"

import Button from '@material-ui/core/Button'
const Header = () =>
{
    return(
        <div className = "header">
        <h1> <Button style = {{ backgroundColor: "rgb(167, 179, 12)" , borderRadius:"60px" , maxHeight: "3cm" , width: "9cm" , boxShadow: "10p  10px  15px" ,border: "none" , borderBottom: "6px solid black"}}> <h1> 😷 </h1></Button> Corona Tracker</h1>
        
        </div>
    )
}
export default Header;
