import React from 'react';

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });


/**** Converting to Stateless ****/
var About = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">About Component</h3>
      <p className="text-center">This is a weather application built for React</p>
    </div>
  )
};


module.exports = About;