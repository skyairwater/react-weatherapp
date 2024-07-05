import SiteHeader from '../components/SiteHeader';
import DisplayWeather from '../components/DisplayWeather';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
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
    const [displaySpinner, ShowSpinner] = useState(false);
    
    const fetchWeather = () => 
    {
        ShowSpinner(true);
        let txtCityName = document.getElementById('txtCityName');        
        let openWeatherMapApiRequest = `${api.base}weather?q=${txtCityName.value}&units=imperial&APPID=${api.key}`;

        fetch(openWeatherMapApiRequest)
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
            ShowSpinner(false);
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
                                autoFocus
                                onKeyDown={(e) => { if(e.key === "Enter") fetchWeather();}} />              
                </Col>
                <Col>
                    <Button variant="primary" onClick={fetchWeather}>
                    { displaySpinner ?  
                        (
                            <Spinner as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true" />
                        ): null 
                    }
                         Submit</Button>                    
                </Col>
            </Row>      
            <Row className='mt-2'>
                { displayWeather ? weatherData.map((item, index) => 
                    (<DisplayWeather key={index} 
                                     id={index} 
                                     weatherResult={item} 
                                     cbRemoveWeather={RemoveWeather} />)): null }
            </Row>
        </> 
        )
  }
  
  export default GetWeather;

