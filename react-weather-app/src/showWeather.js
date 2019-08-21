import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faTemperatureLow, faTemperatureHigh, faWind, faMeteor } from '@fortawesome/free-solid-svg-icons'

class ShowWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null
    }
  }

  componentDidMount(){
    const address = 'https://api.openweathermap.org/data/2.5/weather?';
    const city = this.props.city;
    const key = '5278bebb89d5e1019b04f8a4a1264daa';
    const url = `${address}q=${city}&units=metric&appid=${key}`;

    fetch(url)
      .then(responce => responce.json())
      .then(resp => {
        this.setState({weather: resp})})
  }

  render(){
    const weather = this.state.weather;
    const setCity = this.props.setCity;
    if (!weather) {
      return (<p>Wait...</p>)
    } 
    return(
      <>
        <div className="weatherContainer">
          <h1>{weather.name}</h1>
          <div>
            <FontAwesomeIcon icon={faTint} />
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTemperatureHigh} />
            <p>Max temp: {weather.main.temp_max}°С</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTemperatureLow} />
            <p>Min temp: {weather.main.temp_min}°С</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faWind} />
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMeteor} />
            <p>Description: {weather.weather[0].description}</p>
          </div>
          <button onClick={event => setCity(event, null)} className="backButton">Go back</button>
        </div>
      </>
    )
  }
} 

export default ShowWeather;