import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receivedCity: null,
    }
  }

  setCityName = (e) => {
    let City = e.target.value;
    this.setState({receivedCity: City});
  }

  render() {
    return(
      <form onSubmit={(event) => this.props.setCity(event, this.state.receivedCity)}>
        <label>
          City:
          <input type="text" name="name" onChange={this.setCityName}/>
        </label>
        <input type="submit" value="Search" />
      </form>
    )
  }
} 

export default SearchForm;