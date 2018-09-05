import React from 'react'
import Hello from './hello.js'
import Clock from './clock.js'
import ActionLink from './actionlink.js'
import Toggle from './toggle.js'
import LoginControl from './LoginControl.js'
import Mailbox from './Mailbox.js'
import PageToggle from './PageToggle.js'
import List from './List.js'
import Form from './Form.js'
import LiftingStateUp from './LiftingStateUp.js'
import WelcomeDialog from './WelcomeDialog.js'


import './main.less'

class Main extends React.Component {
  render() {
	const messages = ['React', 'Re: React', 'Re:Re: React'];
    return (
		<div>
			<Hello name="wzy" />			
			<Clock />
			<ActionLink txt="确认" />
			<Toggle />
			<LoginControl />
			<Mailbox unreadMessages={messages} />
			<PageToggle />
			<List />
			<Form />
			<LiftingStateUp />
			<WelcomeDialog />
		</div>
	);
  }
}



export default Main;