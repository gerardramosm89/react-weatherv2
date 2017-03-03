import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from 'ErrorModal';
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,

    };
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
      
      //data => {

        //console.log(data);
    //     this.setState({
    //     location: location,
    //     temp: data,
    //     isLoading: false
    //   });
    // });
    //console.log("Search was hit");
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function() {
    var { isLoading, temp, location, errorMessage } = this.state;
    function renderMessage () {
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError(){
      if (typeof errorMessage == 'string'){
        return(
          <ErrorModal message={errorMessage} />
        )
      }
    }
    return (
      <div>
        <h3 className="text-center page-title">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;