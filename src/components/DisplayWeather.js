import './DisplayWeather.css';

function DisplayWeather(props) 
{ 
  console.log(props);
    return (
      <div>
        <div className="card">
          <div className="title">{props.weather.name}</div>
          <div className="features">
            <ul>
              <li>{props.weather.main.temp}</li>
              <li>{props.weather.weather[0].main}</li>
              <li><img src={ `http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`}></img></li>
              <li>{props.weather.weather[0].description}</li>              
            </ul>
          </div>          
        </div>
      </div>
    );
 }
  
  export default DisplayWeather;