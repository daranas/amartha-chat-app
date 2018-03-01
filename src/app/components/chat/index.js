import React, { Component } from 'react';
// component
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatMessage from './ChatMessage';
import { getMessages, getChannels, saveMessage, onNewMessage } from '../../models/chat';

class Chatroom extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      channels: [],
      selected_channel_id: null
    };

    this.onSendMessage = this.onSendMessage.bind(this);
    this.onChannelSelect = this.onChannelSelect.bind(this);
  }

  componentDidMount() {
    getMessages().then(messages => this.setState({messages}));
    getChannels().then(channels => this.setState({channels, selected_channel_id: channels[0].id}));
    onNewMessage(new_message => {
      const messages = [...this.state.messages, new_message];
      this.setState({messages});
    });
  }

  onSendMessage(author, text, date) {
    const new_message = {
      id: this.state.messages[this.state.messages.length - 1].id + 1,
      author,
      text,
      channel_id: this.state.selected_channel_id,
      date
    };

    saveMessage(new_message);

    const messages = [...this.state.messages, new_message];
    this.setState({messages});
  }

  onChannelSelect(id) {
    this.setState({ selected_channel_id: id });
  }

  filteredMessages() {
    return this.state.messages.filter(({channel_id}) => channel_id === this.state.selected_channel_id);
  }
  
  render () {
    return (
      <div>
        <div className="row">
        <ChatHeader/>
          <div className="container">
            <div className="chat-wrapper">
              <div className="row">
              <div className="col-md-4 sidebar">
                <ChatList 
                channels={this.state.channels}
                selectedChannelId={this.state.selected_channel_id}
                onSelect={this.onChannelSelect}
                counter="2" />
              </div>
              <div className="col-md-8 conversation">
                <ChatMessage messages={this.filteredMessages()} onSendMessage={this.onSendMessage}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatroom;