import React from 'react';

var WeatherForm = React.createClass({
  onFormSubmit: function (e){
    console.log(this.props);
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      console.log("City submitted was: ", location);
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter a city" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;