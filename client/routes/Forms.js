var React = require('react');

var Contact = React.createClass({

	getInitialState: function() {
		return {
			'inputEmail': '',
			'inputPassword': ''
		}
	},

	updateInputValue: function(key, event) {
		var newState = {};
		newState[key] = event.target.value;

		this.setState(newState);
	},

	render: function() {
		return (
			<div className="page-body">
				<h1>Forms</h1>
				<h2>Basic Example</h2>
				<form role="form">
					<div className="form-group">
						<label className="form-label" for="exampleInputEmail1">Email address</label>
						<input onChange={this.updateInputValue.bind(this, 'inputEmail')} value={this.state.inputEmail} type="email" className="form-input" id="exampleInputEmail1" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label className="form-label" for="exampleInputPassword1">Password</label>
						<input onChange={this.updateInputValue.bind(this, 'inputPassword')} value={this.state.inputPassword} type="password" className="form-input" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div className="checkbox">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check me out
						</label>
					</div>
					<button type="button" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = Contact;
