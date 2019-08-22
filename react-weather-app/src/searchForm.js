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
    if (City )
    this.setState({receivedCity: City});
  }

  render() {
    return(
      <div className="searchForm">
        <h1 className="searchFormHeader">Weather search</h1>
        <form className="form"onSubmit={(event) => this.props.setCity(event, this.state.receivedCity)}>
          <label>
            <p className="inputLabel">City:</p>
            <input type="text" name="name" onChange={this.setCityName} pattern="[a-zA-Z]{2,64}" required/>
          </label>
          <input type="submit" value="Search" className="submitButton"/>
        </form>
      </div>
    )
  }
} 

export default SearchForm;