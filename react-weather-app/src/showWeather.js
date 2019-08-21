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
    if (!weather) {
      return (<p>Wait...</p>)
    } 
    return(
      <>
        <div>
          <h1>{weather.name}</h1>
          <p>
            <FontAwesomeIcon icon={faTint} />
            Humidity:{weather.main.humidity}%
          </p>
          <p>
            <FontAwesomeIcon icon={faTemperatureHigh} />
            Max temp:{weather.main.temp_max}°С</p>
          <p>
            <FontAwesomeIcon icon={faTemperatureLow} />
            Min temp:{weather.main.temp_min}°С</p>
          <p>
            <FontAwesomeIcon icon={faWind} />
            wind:{weather.wind.speed} m/s</p>
          <p>
            <FontAwesomeIcon icon={faMeteor} />
            Description:{weather.weather[0].description}</p>
        </div>
      </>
    )
  }
} 

export default ShowWeather;