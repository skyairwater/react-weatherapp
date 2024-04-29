import '../App.css';
import '../components/DisplayWeather.css';
import SiteHeader from '../components/SiteHeader';
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
        let txtCityName = document.getElementById('txtCityName');        
         fetch(`${api.base}weather?q=${txtCityName.value}&units=imperial&APPID=${api.key}`)
        .then(response => response.json())
        .then((result) => {            
            
            if(result.cod === 200) 
            {
                result.UUID = crypto.randomUUID();
                setWeather([...weatherData, result]);
                ShowWeather(true);        
            }
        })
        .finally(() => {
            txtCityName.value = '';
            txtCityName.focus();
        });        
    }

    const RemoveWeather = (UUID)  =>
    {
        let weather = weatherData.filter((item) => item.UUID !== UUID);         
        setWeather(weather);
    }
    
    return (        
        <div className="App">
            <header className="App-header">
                    <SiteHeader />
                    <input id="txtCityName"
                            type="text" 
                            className='text-box' 
                            placeholder='Enter City/Town...' 
                            required 
                            onKeyDown={(e) => { if(e.key === "Enter") fetchWeather();}}/>

                    <button className='button-62' onClick={fetchWeather}>Search</button>
                
            </header>

            { displayWeather ? weatherData.map((item, index) => 
                (<DisplayWeather key={index} id={index} weatherResult={item} cbRemoveWeather={RemoveWeather} />)): null }
        </div>        
    )
  }
  
  export default GetWeather;

