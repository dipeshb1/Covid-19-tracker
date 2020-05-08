import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core";
import {fetchcountries} from "../../API";

const CountryPicker  = ({handleCountryChange}) =>{

    const[fetchedcountries, setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchAPi = async()=>{
            setFetchedCountries(await fetchcountries());
        }
        
        fetchAPi();
    },[setFetchedCountries]);
    return(
        <FormControl >
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedcountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;