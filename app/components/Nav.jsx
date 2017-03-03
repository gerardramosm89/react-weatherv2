import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var location = encodeURIComponent(this.refs.search.value);
    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + location;
    }
    console.log(location);
  },
  render: function () {
    return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather App</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li><input type="search" placeholder="search weather" ref="search" /></li>
            <li><input type="submit" className="button" value="Get weather"/></li>
          </ul>
        </form>
      </div>
    </div>
    )
  }
});

// var old = (
//     <h2>Nav Component</h2>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//     <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
// );


// var Nav = () => {

// };

module.exports = Nav;
