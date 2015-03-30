var React = require('react');
var CX = require('classnames');
var EmailInputGroup = require('../components/EmailInputGroup');
var PasswordInputGroup = require('../components/PasswordInputGroup');

var Forms = React.createClass({

	getInitialState: function() {
		return {
			'inputEmail': '',
			'inputPassword': ''
		};
	},

	render: function() {
		var self = this;

		// handle form input and validation
		function updateEmail(e){
			self.setState({inputEmail: e.target.value})
		};
		function updatePassword(e){
			self.setState({inputPassword: e.target.value})
		};
		

		return (
			<div className="page-body page-cols">
				<div className="page-col page-col-secondary">
					<div className="secondary-nav">
						<a href="javascript:;" className="secondary-nav-item active">Basic</a>
						<a href="javascript:;" className="secondary-nav-item">Inline</a>
						<a href="javascript:;" className="secondary-nav-item">Horizontal</a>
						<a href="javascript:;" className="secondary-nav-item">Controls</a>
					</div>
				</div>
				<div className="page-col page-col-main">
					<h1>Forms</h1>
					<h2>Basic Example</h2>
					<form className="u-margin-bottom-xl">
						<EmailInputGroup value={this.state.inputEmail} onChange={updateEmail} required />
						<PasswordInputGroup value={this.state.inputPassword} onChange={updatePassword} required />
						<div className="checkbox">
							<label className="checkbox-label">
								<input type="checkbox" className="checkbox-input" /> Check me out
							</label>
						</div>
						<button type="button" className="btn btn-default">Submit</button>
					</form>

					
					<h2>Horizontal Form</h2>
					<form className="horizontal-form u-margin-bottom-xl">
						<div className="form-group">
							<label className="form-label" htmlFor="horizontalFormInputEmail">Email address</label>
							<input type="email" className="form-input" placeholder="Enter email" id="horizontalFormInputEmail" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="horizontalFormInputPassword">Password</label>
							<input type="password" className="form-input" placeholder="Password" id="horizontalFormInputPassword" />
						</div>
						<div className="form-group">
							<div className="form-label" />
							<button type="button" className="btn btn-default">Submit</button>
						</div>
					</form>


					<h2>Inline Form</h2>
					<form className="inline-form">
						<div className="form-group">
							<label className="form-label" htmlFor="horizontalFormInputEmail">Email address</label>
							<input type="email" className="form-input" placeholder="Enter email" id="horizontalFormInputEmail" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="horizontalFormInputPassword">Password</label>
							<input type="password" className="form-input" placeholder="Password" id="horizontalFormInputPassword" />
						</div>
						<div className="checkbox">
							<label className="checkbox-label">
								<input type="checkbox" className="checkbox-input" /> Check it
							</label>
						</div>
						<div className="form-group">
							<button type="button" className="btn btn-default">Submit</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Forms;
