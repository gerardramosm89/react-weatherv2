var React = require('react');
import Nav from 'Nav';

/*var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});*/
// Refactoring for stateless component
var Main = (props) => {
  return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
      </div>
  )
}
module.exports = Main;
