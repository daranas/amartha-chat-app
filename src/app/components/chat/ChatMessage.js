import React from 'react';
import PropTypes from 'prop-types';
import ChatField from './ChatField';

const Message = ({author, text, date}) => (
  <li>
    <div className="message-data">
      <span className="message-data-name">{author}</span>
      <span className="message-data-time">{date}</span>
    </div>
    <div className="message bubble">
      <p>{text}</p>
    </div>
  </li>
);

const List = ({messages}) => (
  <ul className="list-unstyled">
    {
      messages.map(({id, author, text, date}) => {
        return <Message
                key={id}
                author={author}
                text={text}
                date={date} />
      })
    }
  </ul>
);

const MessagePane = ({messages, onSendMessage}) => (
  <div className="chat-history">
    <List messages={messages} />
    <ChatField onSend={onSendMessage}/>
  </div>
);

MessagePane.defaultProps = {
  messages: []
};

MessagePane.propTypes = {
  messages: PropTypes.array.isRequired,
  onSendMessage: PropTypes.func.isRequired
};

export default MessagePane;