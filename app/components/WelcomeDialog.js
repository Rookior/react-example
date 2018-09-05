import React from 'react'

// 我们建议这些组件使用特殊childrenprop将子元素直接传递给它们的输出：这允许其他组件通过嵌套JSX将任意子项传递给它们
function FancyBorder(props) {	
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

//虽然这种情况不太常见，但有时您可能需要在组件中使用多个“漏洞”。在这种情况下，您可以提出自己的约定，而不是使用children：
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}
function App() {
  return (
    <SplitPane
      left={
        <p>你好,左边</p>
      }
      right={
        <span>我很高兴,右边</span>
      } />
  );
}
/*有时我们认为组件是其他组件的“特殊情况”。例如，我们可以说a WelcomeDialog是一个特例Dialog。
在React中，这也是通过组合实现的，其中更“特定”的组件呈现更“通用”的组件并使用props配置它：*/
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}
//组合对于定义为类的组件同样有效： 
function NewDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <NewDialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </NewDialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}



function WelcomeDialog() {
  return (
    <div className="borderBottom ptb20">
		<FancyBorder color="blue">
		  <h1 className="Dialog-title">
			Welcome
		  </h1>
		  <p className="Dialog-message">
			Thank you for visiting our spacecraft!
		  </p>
		</FancyBorder>
		<App />
		<Dialog title="Welcome" message="Thank you for visiting our spacecraft!"></Dialog>
		<SignUpDialog />
	</div>
  );
}
export default WelcomeDialog;