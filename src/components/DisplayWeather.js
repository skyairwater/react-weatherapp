import './Weather.css';

function DisplayWeather({weather}) 
{    
    return (
      <div>
        <div className="card">
          <div className="title">{weather.name}</div>
          <div className="features">
            <ul>
              <li>{weather.main.temp}</li>
              <li>{weather.weather[0].main}</li>
              <li>{weather.weather[0].description}</li>              
            </ul>
          </div>          
        </div>
      </div>
    );
 }
  
  export default DisplayWeather;