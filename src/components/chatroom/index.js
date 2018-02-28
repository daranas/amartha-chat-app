import React, { Component } from 'react';
// component
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatMessage from './ChatMessage';

export default class Chatroom extends Component {
    render () {
        return (
            <div>
                <div className="row">
                <ChatHeader/>
                <div className="container">
                    <div className="chat-wrapper">
                    <div className="row">
                        <div className="col-md-4 sidebar">
                            <ChatList/>
                        </div>
                        <div className="col-md-8 conversation">
                            <ChatMessage/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}