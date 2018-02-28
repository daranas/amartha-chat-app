import React, { Component } from 'react';

export default class ChatMessage extends Component {
    render () {
        return (
            <div className="chat-history">
                <ul className="list-unstyled">
                    <li>
                        <div className="message-data">
                            <span className="message-data-name">Aiden</span>
                            <span className="message-data-time">10:12 AM, Today</span>
                        </div>
                        <div className="message bubble">
                            <p>Are we meeting today? Project has been already finished and I have results to show you.</p>
                        </div>
                    </li>
                    <li>
                        <div className="message-data">
                            <span className="message-data-name">Aiden</span>
                            <span className="message-data-time">10:12 AM, Today</span>
                        </div>
                        <div className="message bubble">
                            <p>Are we meeting today? Project has been already finished and I have results to show you.</p>
                        </div>
                    </li>
                </ul>
                <div className="chat-field">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter text here ..." aria-label="Enter text here ..." aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                        <button type="button" className="btn btn-outline-secondary">
                            <i className="zmdi zmdi-mail-send"></i>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}