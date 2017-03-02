var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Weather from 'Weather';
import About from 'About';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
    <IndexRoute component={Weather} />

    </Route>
  </Router>,
  document.getElementById('app')
);
