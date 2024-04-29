import logo from '../logo.svg';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SiteHeader(){

    return(
        <>
            <Alert variant='danger'>                
                <Row>
                    <Col md="auto" className='text-center'><h4>Weather App by Krishna Murthy - React Functional Components</h4></Col>
                    <Col><img src={logo} className="App-logo" alt="logo" /></Col>        
                </Row>
            </Alert>
        </>
    )
}

export default SiteHeader;