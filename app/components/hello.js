import React from 'react'
import './hello.less'

// class Hello extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// let Hello = React.createClass({
// 	render(){
// 		return(
// 			<div className="hello-component">
// 				Hello world,React and webpack
// 			</div>
// 		);
// 	}
// });

// var Hello = React.createClass({
//     render: function() {
// 		return <h1>Hello {this.props.name}</h1>;
//     }
// });

 
function Hello(props) {
  return (
    <div className="hello-component">
      <h1>Hello, world!</h1>
      <h2>Hello, {props.name}.</h2>
    </div>
  );
}

export default Hello;
