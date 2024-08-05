import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GetWeather from './components/GetWeather';
import reportWebVitals from './reportWebVitals';
import SiteHeader from './components/SiteHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container className='mt-3'>
    <Row>
      <SiteHeader />
      <GetWeather />    
    </Row>
  </Container>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
