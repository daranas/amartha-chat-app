import React, { Component } from 'react';
import { auth } from '../../helpers/auth';
import logoWhite from '../../assets/images/logo-white.png';

function setErrorMsg(error) {
	return {
		registerError: error.message
	}
}

export default class Register extends Component {
	state = {
		registerError: null
	}

	handleSubmit = (e) => {
		e.preventDefault();
		auth(this.name.value, this.email.value, this.password.value)
		.catch((error) => {
			if(error) {
				this.setState(setErrorMsg(error));
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
						<h2 className="text-center">Create New Account</h2>
						<form className="form-horizontal" onSubmit={this.handleSubmit}>
							{
							this.state.registerError &&
							<div className="alert alert-danger" role="alert">
								<span className="sr-only">Error:</span>
								&nbsp;{this.state.registerError}
							</div>
							}
							<div className="form-group">
								<input className="form-control" ref={(name) => this.name = name} placeholder="Full Name" autoFocus required/>
								<i className="zmdi zmdi-account"></i>
							</div>
							<div className="form-group">
								<input className="form-control" ref={(email) => this.email = email} placeholder="Email" required/>
								<i className="zmdi zmdi-account-circle"></i>
							</div>

							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" ref={(password) => this.password = password} required />
								<i className="zmdi zmdi-lock"></i>
							</div>
							
							<div className="form-group">
								<div className="flexbox align-items-center">
									<button type="submit" className="btn btn-gradient">Register</button>
									<p className="text-muted">If you have an account you can <a href="/login">Sign In Here.</a></p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}