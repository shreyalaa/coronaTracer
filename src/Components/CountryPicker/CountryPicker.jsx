import React, { useEffect, useState } from "react";
import { fetchCountry } from "../../api";
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const CountryPicker = ({handleCountryChange}) =>
{   
    const [selectNative , setSelectNative] = useState([]);

    useEffect(()=>
    {
        const fetchData = async () =>
        {
            setSelectNative(await fetchCountry())
        }
        fetchData()
    },[setSelectNative])
    
    return(
        <div>
        <FormControl style = {{marginLeft:"14cm"}}>
        <NativeSelect defaultValue ="" onChange = {(e) =>(handleCountryChange(e.target.value))} >
        <option value = "global">global</option>
        {selectNative.map((country , i)=><option value= {country} id = {i}>{country}</option>)}
        </NativeSelect>
        </FormControl>
        </div>
    )
}
export default CountryPicker;