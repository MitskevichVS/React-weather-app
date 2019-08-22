import React from 'react';

import SearchForm from './searchForm';
import ShowWeather from './showWeather';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
    }
  }

  setCity = (e, City) => {
    e.preventDefault();
    console.log(City);
    this.setState({city: City});
  }

  render() {
    return (
      <>
        {
          !this.state.city
          ? <SearchForm setCity={this.setCity}/>
          : <ShowWeather city={this.state.city} setCity={this.setCity}/>
        }

      </>
    )
  }
}

export default MainPage;
