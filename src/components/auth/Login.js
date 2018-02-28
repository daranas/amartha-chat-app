import React, { Component } from 'react';
import { login } from '../../helpers/auth';
import logoWhite from '../../assets/images/logo-white.png';

function setErrorMsg(error) {
	return {
		loginMessage: error
	}
}
  
export default class Login extends Component {
	state = {
		loginMessage: null
	}

	handleSubmit = (e) => {
		e.preventDefault();
		login(this.email.value, this.password.value)
		.catch((error) => {
			if(error) {
				this.setState(setErrorMsg('Invalid username/password.'));
			}
		});
	}

	render () {
		return (
			<div className="row">
				<div className="hidden-xs hidden-sm col-lg-6 col-md-6 banner">
					<div className="banner-content">
						<img src={logoWhite} alt=""/>
					</div>
					<div className="banner-footer">
						<p>Handcrafted by DaranaSV</p>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 login-sidebar">
					<div className="login-container">
						<h2 className="text-center">Sign In to Amartha Chat App</h2>
						<form className="form-horizontal" onSubmit={this.handleSubmit}>
							{
							this.state.loginMessage &&
							<div className="form-group">
								<div className="alert alert-danger" role="alert">
									<span className="sr-only">Error:</span>
									&nbsp;{this.state.loginMessage}
								</div>
							</div>
							}
							<div className="form-group">
								<input className="form-control" ref={(email) => this.email = email} placeholder="Email" required autoFocus />
								<i className="zmdi zmdi-account-circle"></i>
							</div>

							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" ref={(password) => this.password = password} required />
								<i className="zmdi zmdi-lock"></i>
							</div>
							
							<div className="form-group">
								<div className="flexbox align-items-center">
									<button type="submit" className="btn btn-gradient">Sign In</button>
									<p className="text-muted">If you are a new user <a href="/register">Create account Here.</a></p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}