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

	setSomeShit() {
		this.setState({ inputEmail: Date.now() + '' })
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


		// render that shit

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
					<form role="form">
						<EmailInputGroup value={this.state.inputEmail} onChange={updateEmail} required />
						<PasswordInputGroup value={this.state.inputPassword} onChange={updatePassword} required />
						<div className="checkbox">
							<label className="checkbox-label">
								<input type="checkbox" className="checkbox-input" /> Check me out
							</label>
						</div>
						<button type="button" className="btn btn-default" onClick={this.setSomeShit}>Submit</button>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Forms;
