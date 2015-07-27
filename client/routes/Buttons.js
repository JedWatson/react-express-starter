var React = require('react/addons');
var Dropdown = require('../components/Dropdown');
var Button = require('../components/Button');

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
				<Button>Default</Button><hr />
				<Button type="primary">Primary</Button><hr />
				<Button disabled>Disabled</Button><hr />
				<Button type="link">Link</Button>

				<h2 className="u-margin-top-lg">Large</h2>
				<Button size="large">Default</Button><hr />
				<Button size="large" type="primary">Primary</Button><hr />
				<Button size="large" disabled>Disabled</Button><hr />
				<Button size="large" type="link">Link</Button>

				<h2 className="u-margin-top-lg">Small</h2>
				<Button size="small">Default</Button><hr />
				<Button size="small" type="primary">Primary</Button><hr />
				<Button size="small" disabled>Disabled</Button><hr />
				<Button size="small" type="link">Link</Button>

				<h2 className="u-margin-top-lg">Extra Small</h2>
				<Button size="xsmall">Default</Button><hr />
				<Button size="xsmall" type="primary">Primary</Button><hr />
				<Button size="xsmall" disabled>Disabled</Button><hr />
				<Button size="xsmall" type="link">Link</Button>

				<h2 className="u-margin-top-lg">Colours</h2>
				<Button type="danger">Danger</Button><hr />
				<Button type="default-danger">Danger</Button><hr />
				<Button type="warning">Warning</Button><hr />
				<Button type="default-warning">Warning</Button><hr />
				<Button type="success">Success</Button><hr />
				<Button type="default-success">Success</Button>

				<h2 className="u-margin-top-lg">Button Groups</h2>
				<div className="btn-group">
					<Button>Left</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</div>

				<h2 className="u-margin-top-lg">Dropdown</h2>
				<Dropdown isOpen={this.state.dropdownOpen} onChange={this.toggleDropdown} items={DROPDOWN_OPTIONS} buttonLabel="Action" buttonClass="btn btn-default" buttonDisclosureArrow />
			</div>
		);
	}
});
