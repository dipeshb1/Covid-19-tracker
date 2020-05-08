import React from "react";
import {Cards, Charts, CountryPicker} from './Components';
import styles from "./App.module.css";
import {fetchData} from "./API";
import Image from "./Images/image.png";

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        
        this.setState({data : fetchedData});
    }
    handleCountryChange= async (country) => {
        const data = await fetchData(country);

        this.setState({ data: data, country: country });
        console.log(data);
    }
    render(){
        const {data, country} = this.state;
        return(
        <div className={styles.container}>
            <img src={Image} alt="covid19"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country}/>
            <div className={styles.footer}>
              <p>By <a href="https://github.com/dipeshb1">Dipesh Bhagat</a> <br/> Credits - Javascript Mastery</p>
            </div>
            
        </div>);
    }
}

export default App;