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
              <li>{props.weather.temp}</li>
              <li>{props.weather.weather[0].main}</li>
              <li>{props.weather.weather[0].description}</li>              
            </ul>
          </div>          
        </div>
      </div>
    );
 }
  
  export default DisplayWeather;