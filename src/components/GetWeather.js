import '../App.css';
import '../components/Weather.css';
import DisplayWeather from './DisplayWeather';

import { useState } from 'react';

const api = {
    key: '1cb6a092519b686777b0e30ce5c1befd',
    base: 'https://api.openweathermap.org/data/2.5/'
  }

  function GetWeather()
  {
    const [cityName, setCity] = useState("");    
    const [weatherData, setWeather] = useState({});
    const [displayWeather, ShowWeather] = useState(false);
  
    const fetchWeather = async () => 
    {
        await fetch(`${api.base}weather?q=${cityName}&units=imperial&APPID=${api.key}`)
        .then(response => response.json())
        .then((result) => {
            setWeather(result);
            ShowWeather(true);        
        })
    }
    
    return (        
        <div className="App">
            <header className="App-header">
                <h2>Weather App</h2>
                
                    <input type="text" 
                            className='text-box' 
                            placeholder='Enter City/Town...' 
                            onChange={(e) => setCity(e.target.value)} required />

                    <button className='button-62' onClick={fetchWeather}>Search</button>
                
            </header>
            { displayWeather ? <DisplayWeather weather={weatherData} /> : null }
        </div>        
    )
  }
  
  export default GetWeather;

