import React from 'react';
import avaDefault from '../../../assets/images/logo-circle.png';

const Chat = ({name, selected, onClick, counter}) => {
  const className = selected ? "clearfix active" : "clearfix";
  return (
    <li onClick={onClick} className={className}>
      <img src={avaDefault} alt="avatar"/>
      <div className="about">
        <div className="name">{name}</div>
        <div className="status">{counter} topics </div>
      </div>
    </li>
  );
}

const ChatList = ({channels, selectedChannelId, onSelect, counter}) => (
  <div className="chat-list">
    <ul className="list-unstyled">
    {
      channels.map(({id, name}) => {
        const is_selected = selectedChannelId === id;
        const onChannelSelect = () => onSelect(id);
        return <Chat 
                  key={id}
                  name={name}
                  selected={is_selected}
                  onClick={onChannelSelect}
                  counter={counter} />
      })
    }
    </ul>
  </div>
);

export default ChatList;