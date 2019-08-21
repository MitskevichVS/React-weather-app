import React from 'react';

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
    console.log(url);

    fetch(url)
      .then(responce => responce.json())
      .then(resp => {
        console.log(resp);
        this.setState({weather: resp})})
  }

 


  render(){
    const weather = this.state.weather;
    console.log(weather);
    if (!weather){
      return (<p>Wait...</p>)
    } 
    return(
      <>
        <div>
          <h1>{weather.name}</h1>
          <p>Humidity:{weather.main.humidity}%</p>
          <p>Max temp:{weather.main.temp_max}°С</p>
          <p>Min temp:{weather.main.temp_min}°С</p>
          <p>wind:{weather.wind.speed} m/s</p>
          <p>Description:{weather.weather[0].description}</p>
        </div>
      </>
    )
  }
} 

export default ShowWeather;