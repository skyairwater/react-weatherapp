import './App.css';
import { useState } from 'react';

const api = {
  key: '1cb6a092519b686777b0e30ce5c1befd',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [search, setSearch] = useState("");
  const [owmResult, setWeather] = useState({});
  
  const fetchWeather = async () => {
    await fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
    .then(response => response.json())
    .then((result) => {
      setWeather(result);
      console.log(result);
    })
  }

  return (
    <>
    if(!owmResult)
    {
    <div className="App">
      <header className="App-header">
       {/* Header */}
        <h1>Weather App</h1>
       {/* Search Box */}
       <div>
        <input type="text" placeholder='Enter City/Town...' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={fetchWeather} >Search</button>
       </div>
       
       {/* Location */}
       <p>{owmResult.name}</p>

       {/* Temp: F/C */}
       <p>{owmResult.main.temp} °F</p>
       
       {/* Weather Condition */}
       
       {/* <p>{owmResult.weather[0].main}</p> */}
       
       {/* <p>{owmResult.weather[0].description}</p>  */}
      </header>
    </div>
}
    </>
  );
}

export default App;
