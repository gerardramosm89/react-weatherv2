import React from 'react';
import { Link } from 'react-router';

var Examples = () => {
    return (
      <div className="text-center">
        <h1>Examples</h1>
        <p>here are a few example location to try out.</p>
        <ol>
          <Link to='/?location=San%20Jose'>San Jose, CA</Link>
        </ol>
      </div>
    )
};
module.exports = Examples;

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });
