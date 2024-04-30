
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

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
      <>
        <Card bg="Primary" style={{width: '26rem'}} className="mb2 m-2">          
          <Card.Body>
            <Button onClick={() => { cbRemoveWeather(weatherResult.UUID)}} className='float-end' variant="danger" size="sm">X</Button>
              <Row>
                <Col xs lg="6">
                  <h5 className='mt-2'>{weatherResult.name}</h5>
                </Col>
                <Col>
                <img src={ `http://openweathermap.org/img/w/${weatherResult.weather[0].icon}.png`}></img>
                </Col>
              </Row> 
              <Form>
                <Form.Group as={Row} controlId="formCountryLabel">
                  <Form.Label column sm="5">Country</Form.Label>
                  <Col sm="2">
                    <Form.Control plaintext readOnly defaultValue={weatherResult.sys.country} />
                  </Col>
                  <Col sm="2">
                  <img className='mt-2' src={`https://flagsapi.com/${weatherResult.sys.country}/flat/16.png`}></img>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formTemperatureLabel">
                  <Form.Label column sm="5">Temperature</Form.Label>
                  <Col sm="5">
                    <Form.Control plaintext readOnly 
                        defaultValue={`${weatherResult.main.temp} °${measurement}`} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formFeelsLikeLabel">
                  <Form.Label column sm="5">Feels Like</Form.Label>
                  <Col sm="5">
                    <Form.Control plaintext readOnly 
                        defaultValue={weatherResult.main.feels_like} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formMaxTempLabel">
                  <Form.Label column sm="5">Max Temp</Form.Label>
                  <Col sm="5">
                    <Form.Control plaintext readOnly 
                        defaultValue={weatherResult.main.temp_max} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formMinTempLabel">
                  <Form.Label column sm="5">Min Temp</Form.Label>
                  <Col sm="5">
                    <Form.Control plaintext readOnly 
                        defaultValue={weatherResult.main.temp_min} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formConditionLabel">
                  <Form.Label column sm="5">Condition</Form.Label>
                  <Col sm="5">
                    <Form.Control plaintext readOnly 
                        defaultValue={weatherResult.weather[0].description} />
                  </Col>
                </Form.Group>
              </Form>
          </Card.Body>
        </Card>
      </>
    );
 }
  
  export default DisplayWeather;