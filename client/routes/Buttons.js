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
	displayName: 'VIEW_Buttons',
	getInitialState() {
		return {
			dropdownOpen: false
		};
	},
	toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},

	render () {
		return (
			<div className="page-container">
				<h1>Buttons</h1>
				<h2 className="u-margin-top-lg">Standard</h2>
				<button type="button" className="btn btn-default">Default</button>
				<hr />
				<button type="button" className="btn btn-primary">Primary</button>
				<hr />
				<button type="button" className="btn btn-default" disabled>Disabled</button>
				<hr />
				<button type="button" className="btn btn-link">Link</button>

				<h2 className="u-margin-top-lg">Large</h2>
				<button type="button" className="btn btn-lg btn-default">Default</button>
				<hr />
				<button type="button" className="btn btn-lg btn-primary">Primary</button>
				<hr />
				<button type="button" className="btn btn-lg btn-default" disabled>Disabled</button>
				<hr />
				<button type="button" className="btn btn-lg btn-link">Link</button>

				<h2 className="u-margin-top-lg">Small</h2>
				<button type="button" className="btn btn-sm btn-default">Default</button>
				<hr />
				<button type="button" className="btn btn-sm btn-primary">Primary</button>
				<hr />
				<button type="button" className="btn btn-sm btn-default" disabled>Disabled</button>
				<hr />
				<button type="button" className="btn btn-sm btn-link">Link</button>

				<h2 className="u-margin-top-lg">Extra Small</h2>
				<button type="button" className="btn btn-xs btn-default">Default</button>
				<hr />
				<button type="button" className="btn btn-xs btn-primary">Primary</button>
				<hr />
				<button type="button" className="btn btn-xs btn-default" disabled>Disabled</button>
				<hr />
				<button type="button" className="btn btn-xs btn-link">Link</button>

				<h2 className="u-margin-top-lg">Colours</h2>
				<button type="button" className="btn btn-danger">Danger</button>
				<hr />
				<button type="button" className="btn btn-default btn-danger">Danger</button>
				<hr />
				<button type="button" className="btn btn-warning">Warning</button>
				<hr />
				<button type="button" className="btn btn-default btn-warning">Warning</button>
				<hr />
				<button type="button" className="btn btn-success">Success</button>
				<hr />
				<button type="button" className="btn btn-default btn-success">Success</button>

				<h2 className="u-margin-top-lg">Button Groups</h2>
				<div className="btn-group">
					<button type="button" className="btn btn-default">Left</button>
					<button type="button" className="btn btn-default">Middle</button>
					<button type="button" className="btn btn-default">Right</button>
				</div>

				<h2 className="u-margin-top-lg">Dropdown</h2>
				<Dropdown isOpen={this.state.dropdownOpen} onChange={this.toggleDropdown} items={DROPDOWN_OPTIONS} buttonLabel="Action" buttonClass="btn btn-default" buttonDisclosureArrow />
			</div>
		);
	}
});
