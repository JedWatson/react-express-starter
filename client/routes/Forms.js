var React = require('react');
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
						<a href="#section-basic" className="secondary-nav-item active">Basic</a>
						<a href="#section-horizontal" className="secondary-nav-item">Horizontal</a>
						<a href="#section-inline" className="secondary-nav-item">Inline</a>
						<a href="#section-controls" className="secondary-nav-item">Supported Controls</a>
						<a href="#section-validation" className="secondary-nav-item">Validation</a>
					</div>
				</div>
				<div className="page-col page-col-main">
					<h1>Forms</h1>
					<h2 id="section-basic" className="u-padding-top-lg">Basic Example</h2>
					<form className="u-margin-bottom-lg">
						<div className="form-group">
							<label className="form-label" htmlFor="basicFormInputEmail">Email address</label>
							<input type="email" className="form-input" placeholder="Enter email" id="basicFormInputEmail" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="basicFormInputPassword">Password</label>
							<input type="email" className="form-input" placeholder="Password" id="basicFormInputPassword" />
						</div>
						<div className="form-group">
							<label className="checkbox-label">
								<input type="checkbox" className="checkbox-input" /> Check me out
							</label>
						</div>
						<button type="button" className="btn btn-default">Submit</button>
					</form>

					
					<h2 id="section-horizontal" className="u-padding-top-lg">Horizontal Form</h2>
					<form className="horizontal-form u-margin-bottom-lg">
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


					<h2 id="section-inline" className="u-padding-top-lg">Inline Form</h2>
					<form className="inline-form u-margin-bottom-lg">
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


					<h2 id="section-controls" className="u-padding-top-lg">Supported Controls</h2>
					<form className="u-margin-bottom-lg">
						<div className="form-group">
							<label className="form-label" htmlFor="supportedControlsInput">Input</label>
							<input type="email" className="form-input" placeholder="Input" id="supportedControlsInput" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="supportedControlsInputLarge">Large Input</label>
							<input type="email" className="form-input form-input-lg" placeholder="Large" id="supportedControlsInputLarge" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="supportedControlsInputSmall">Small Input</label>
							<input type="email" className="form-input form-input-sm" placeholder="Small" id="supportedControlsInputSmall" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="supportedControlsInputDisabled">Disabled Input</label>
							<input type="email" className="form-input" placeholder="Disabled" id="supportedControlsInputDisabled" disabled />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="supportedControlsTextarea">Textarea</label>
							<textarea type="email" className="form-input" placeholder="Textarea" id="supportedControlsTextarea" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="supportedControlsSelect">Select</label>
							<select className="form-input" id="supportedControlsSelect">
								{[1,2,3,4,5].map(function(item) { return <option value={item}>Option {item}</option> })}
							</select>
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="supportedControlsSelectDisabled">Disabled Select</label>
							<select className="form-input" id="supportedControlsSelectDisabled" disabled>
								{[1,2,3,4,5].map(function(item) { return <option value={item}>Option {item}</option> })}
							</select>
						</div>
						<div className="form-group">
							<div className="form-label">Checkboxes</div>
							{[1,2,3].map(function(item) { return <div className="checkbox">
								<label className="checkbox-label">
									<input type="checkbox" className="checkbox-input" /> Check me out
								</label>
							</div> })}
						</div>
						<div className="form-group">
							<div className="form-label">Radios</div>
							{[1,2,3].map(function(item) { return <div className="radio">
								<label className="radio-label">
									<input type="radio" name="supportedControlsRadios" className="radio-input" /> Pick me
								</label>
							</div> })}
						</div>
						<div className="form-group">
							<div className="form-label">Inline Checkboxes</div>
							<div className="inline-controls">
								{[1,2,3].map(function(item) { return <span className="checkbox">
									<label className="checkbox-label">
										<input type="checkbox" className="checkbox-input" /> Check me out
									</label>
								</span> })}
							</div>
						</div>
						<div className="form-group">
							<div className="form-label">Inline Radios</div>
							<div className="inline-controls">
								{[1,2,3].map(function(item) { return <span className="radio">
									<label className="radio-label">
										<input type="radio" name="supportedControlsInlineRadios" className="radio-input" /> Pick me
									</label>
								</span> })}
							</div>
						</div>
						<div className="form-group">
							<label className="form-label">Help Block</label>
							<div className="form-help">A block of help text that may extend beyond one line. Use &lt;span&gt; or &lt;div&gt; to control display.</div>
						</div>
					</form>
					<h2 id="section-validation" className="u-padding-top-lg">Validation</h2>
					<form className="u-margin-bottom-xl">
						<EmailInputGroup value={this.state.inputEmail} onChange={updateEmail} required />
						<PasswordInputGroup value={this.state.inputPassword} onChange={updatePassword} required />
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Forms;
