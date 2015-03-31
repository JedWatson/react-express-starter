var React = require('react');
var CX = require('classnames');

function validatePassword(value) {
	return value.length >= 8;
}

module.exports = React.createClass({
	displayName: "Spinner",
	propTypes: {
		type: React.PropTypes.string,
		className: React.PropTypes.string
	},
	render() {
		var componentClass = CX(
			'spinner',
			'spinner--' + this.props.type,
			this.props.className
		);

		return (
			<div className={componentClass}>
				<i className="spinner__dot" />
				<i className="spinner__dot" />
				<i className="spinner__dot" />
			</div>
		)
	}
});