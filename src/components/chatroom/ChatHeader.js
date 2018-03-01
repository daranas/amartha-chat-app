import React, { Component } from 'react';
import { logout } from '../../helpers/auth';
import logoWhite from '../../assets/images/logo-white.png';

export default class ChatHeader extends Component {
  render () {
    return (
      <div className="chat-header">
        <div className="container">
          <div className="logo">
            <img src={logoWhite} alt=""/>
          </div>
          <div className="float-right">
            <button 
              className="btn btn-line"
              onClick={() => {
              logout();
              }}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}