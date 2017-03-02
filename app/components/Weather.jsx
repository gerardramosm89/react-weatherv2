import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(data => {
        //console.log(data);
        this.setState({
        location: location,
        temp: data,
        isLoading: false
      });
    });
    //console.log("Search was hit");
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function() {
    var { isLoading, temp, location } = this.state;
    function renderMessage () {
      if (isLoading){
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;