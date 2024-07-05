import logo from '../logo.svg';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../components/SiteHeader.css';
import React, { useState } from 'react';

function SiteHeader()
{
    return(
        <>
            <Alert variant='warning'>                
                <Row>
                    <Col md="auto" className='text-center'><h4>Weather App by Ganesh Murthy - React Functional Components</h4></Col>
                    <Col><img src={logo} className="App-logo" alt="logo" /></Col>                        
                </Row>
            </Alert>
        </>
    )
}

export default SiteHeader;