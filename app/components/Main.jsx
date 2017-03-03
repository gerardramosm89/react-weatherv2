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
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
          </div>
        </div>
      </div>
  )
}
module.exports = Main;
