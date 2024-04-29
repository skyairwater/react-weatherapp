import '../App.css';
import '../components/DisplayWeather.css';
import SiteHeader from '../components/SiteHeader';
import DisplayWeather from '../components/DisplayWeather';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        <>
            <SiteHeader />
            <Row>
                <Col xs lg="3">
                    <Form.Control id="txtCityName"
                                type="text" 
                                className='text-box' 
                                placeholder='Enter City/Town...' 
                                required 
                                onKeyDown={(e) => { if(e.key === "Enter") fetchWeather();}} />              
                </Col>
                <Col>
                    <Button variant="primary" onClick={fetchWeather}>Submit</Button>                    
                </Col>
            </Row>      
            <Row className='mt-2'>
                { displayWeather ? weatherData.map((item, index) => 
                    (<DisplayWeather key={index} id={index} weatherResult={item} cbRemoveWeather={RemoveWeather} />)): null }
            </Row>
        </>        
            
    )
  }
  
  export default GetWeather;

