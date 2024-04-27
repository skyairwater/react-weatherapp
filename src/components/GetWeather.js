import '../App.css';
import '../components/DisplayWeather.css';
import DisplayWeather from '../components/DisplayWeather';

import { useState } from 'react';

const api = {
    key: '1cb6a092519b686777b0e30ce5c1befd',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

  function GetWeather()
  {    
    const [weatherData, setWeather] = useState([]);
    const [displayWeather, ShowWeather] = useState(false);    
  
    const fetchWeather = () => 
    {
        let cityName = document.getElementById('txtCityName').value;
         fetch(`${api.base}weather?q=${cityName}&units=imperial&APPID=${api.key}`)
        .then(response => response.json())
        .then((result) => {            
            setWeather([...weatherData, result]);
            ShowWeather(true);        
        })        
    }
    
    return (        
        <div className="App">
            <header className="App-header">
                <h2>Weather App</h2>
                
                    <input id="txtCityName"
                            type="text" 
                            className='text-box' 
                            placeholder='Enter City/Town...' 
                            required />

                    <button className='button-62' onClick={fetchWeather}>Search</button>
                
            </header>
            
            { displayWeather ? weatherData.map((item, index) => (<DisplayWeather key={index} weather={item} />)): null }
        </div>        
    )
  }
  
  export default GetWeather;

