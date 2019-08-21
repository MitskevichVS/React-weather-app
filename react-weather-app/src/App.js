import React from 'react';
import SearchWeather from './Search';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <form>
          <label>
            Sity:
            <input type='text' name='Sity' />
          </label>
          <input type='submit' value='Search' onClick='SearchWeather'/>
        </form>
      </>
    )
  }
}

export default MainPage;
