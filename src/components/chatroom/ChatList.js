import React, { Component } from 'react';
import userDefault from '../../assets/images/user.png';

export default class ChatList extends Component {
  render () {
    return (
      <div className="chat-list">
        <ul className="list-unstyled">
          <li className="clearfix">
            <img src={userDefault} alt="avatar"/>
            <div className="about">
              <div className="name">Vincent Porter</div>
              <div className="status"> <i className="zmdi zmdi-circle offline"></i> left 7 mins ago </div>                                            
            </div>
          </li>
          <li className="clearfix active">
            <img src={userDefault} alt="avatar"/>
            <div className="about">
              <div className="name">Aiden Chavez</div>
              <div className="status"> <i className="zmdi zmdi-circle online"></i> online </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}