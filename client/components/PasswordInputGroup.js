var React = require('react');
var CX = require('classnames');

function validatePassword(value) {
	return value.length >= 8;
}

module.exports = React.createClass({
	displayName: "PasswordInputGroup",
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		required: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		requiredMessage: React.PropTypes.string,
		invalidMessage: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			requiredMessage: 'Password is required',
			invalidMessage: 'Password must be at least 8 characters in length'
		};
	},
	getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e);
	},
	handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput(value) {
		var newState = {
			isValid: true
		};
		if ((value.length && !validatePassword(value)) || (!value.length && this.props.required)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render() {
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = (
				<div className="form-validation is-invalid">
					{this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage}
				</div>
			);
		}
		var formGroupClass = CX('form-group', {
			'is-invalid': !this.state.isValid
		});

		return (
			<div className={formGroupClass}>
				<label className="form-label" htmlFor="inputPassword">Password</label>
				<input onChange={this.handleChange} onBlur={this.handleBlur} value={this.props.value} type="password" className="form-input" placeholder="Enter password" id="inputPassword" />
				{validationMessage}
			</div>
		)
	}
});