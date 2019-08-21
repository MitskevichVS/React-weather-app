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
      <div className="searchForm">
        <h3 className="searchFormHeader">Weather search</h3>
        <form className="form"onSubmit={(event) => this.props.setCity(event, this.state.receivedCity)}>
          <label>
            <p className="inputLabel">City:</p>
            <input type="text" name="name" onChange={this.setCityName}/>
          </label>
          <input type="submit" value="Search" className="submitButton"/>
        </form>
      </div>
    )
  }
} 

export default SearchForm;