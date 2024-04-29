import './DisplayWeather.css';
var measurement = "";
function DisplayWeather({weatherResult, cbRemoveWeather}) 
{  
  if(weatherResult.sys.country == 'US')
  {
    measurement = "F"
  }
  else if(weatherResult.sys.country !== 'US') { 
    measurement = "C";
  }
    return (
      <div>        
        <div className="card" onClick={() => { cbRemoveWeather(weatherResult.UUID)}} >        
          <div className="title">{weatherResult.name} <a href="#" className="close-thik"></a></div>
          <div className="features">
            <ul>
              <li>Country: {weatherResult.sys.country} <img src={`https://flagsapi.com/${weatherResult.sys.country}/flat/16.png`}></img></li>
              <li>{weatherResult.main.temp} °{measurement}</li>
              <li>Feels like: {weatherResult.main.feels_like}</li>
              <br />
              <li>High: {weatherResult.main.temp_max}</li>
              <li>Low: {weatherResult.main.temp_min}</li>
              <br />
              <li>{weatherResult.weather[0].main}</li>
              <li><img src={ `http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png`}></img></li>
              <li>{weatherResult.weather[0].description}</li>      
            </ul>
          </div>          
        </div>
      </div>
    );
 }
  
  export default DisplayWeather;