import logo from '../logo.svg';

function SiteHeader(){

    return(
        <>
            <h2>Weather App</h2>
            <img src={logo} className="App-logo" alt="logo" />
        </>
    )
}

export default SiteHeader;