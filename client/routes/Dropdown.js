var React = require('react/addons');
var Dropdown = require('../components/Dropdown');

var DROPDOWN_OPTIONS = [
	{ type: 'item', anchor: 'javascript:;', label: 'Action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Another action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Something else here' },
	{ type: 'divider' },
	{ type: 'header', label: 'Dropdown header' },
	{ type: 'item', anchor: 'javascript:;', label: 'Separated link' },
];

module.exports = React.createClass({
	displayName: 'VIEW_Dropdown',
	getInitialState() {
		return {
			dropdownOpen: false
		};
	},
	toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	render() {
		return (
			<div className="page-container">
				<h1>Dropdown</h1>
				<Dropdown isOpen={this.state.dropdownOpen} onChange={this.toggleDropdown} items={DROPDOWN_OPTIONS} buttonLabel="Action" buttonDisclosureArrow />
			</div>
		);
	}
});
