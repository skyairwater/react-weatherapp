import './DisplayWeather.css';

function DisplayWeather({weatherResult, cbRemoveWeather}) 
{  
   
    return (
      <div>        
        <div className="card" onClick={() => { cbRemoveWeather(weatherResult.UUID)}} >
          <div className="title">{weatherResult.name}</div>
          <div className="features">
            <ul>
              <li>{weatherResult.main.temp}</li>
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