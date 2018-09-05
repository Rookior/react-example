import React from 'react'

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

//报错代码
//  class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   // Warning: this is *experimental* syntax.
//   handleClick = () => {
//     console.log('this is:', this);
//   }
// 
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
	this.state = {isShow: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
	
  handleClick(id) {
	console.log(id)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  toggleShow(id){
	  console.log(id)
	  this.setState(prevState => ({
	  isShow: !prevState.isShow
	  }));
  }

  render() {
    return (
	<div className="borderBottom ptb20">
      <button className="mr20" onClick={this.handleClick.bind(this,"007")}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
	  <button className="mr20" onClick={(e) => this.toggleShow("001", e)}>
		{this.state.isShow ? '显示' : '隐藏'}
	  </button>
	  <LoggingButton />	  
	</div>
    );
  }
}

export default Toggle;
