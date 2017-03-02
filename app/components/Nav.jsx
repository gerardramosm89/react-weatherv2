import React from 'react';
import { Link } from 'react-router';
var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/">Get Weather</Link>
        <Link to="about">About</Link>
      </div>
    );
  }
});

module.exports = Nav;
