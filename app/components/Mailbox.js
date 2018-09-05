import React from 'react'

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div className="borderBottom ptb20">
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

export default Mailbox;