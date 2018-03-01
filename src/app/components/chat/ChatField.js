import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebaseAuth } from '../../config/constants';
import moment from 'moment';

class ChatField extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      date: "",
    };
  }

  updateMessage(event) {
    const user = firebaseAuth().currentUser;
    const date = moment().format("h:mm a, D MMMM");
    this.setState({
      name: user.displayName,
      message: event.target.value,
      date: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, message, date } = this.state;
    this.props.onSend(name, message, date);
    this.setState({ message: "" })
  }

  render() {
    return (
      <div className="chat-field">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <div className="input-group mb-3">
              <input 
                type="text"
                className="form-control"
                placeholder="Enter text here ..."
                aria-label="Enter text here ..."
                value={this.state.message}
                onChange={this.updateMessage.bind(this)}
                required
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-outline-secondary">
                  <i className="zmdi zmdi-mail-send"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

ChatField.propTypes = {
  onSend: PropTypes.func.isRequired
};

ChatField.defaultProps = {
  onSend: () => {}
}

export default ChatField;