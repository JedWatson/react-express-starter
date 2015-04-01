var React = require('react');
var Spinner = require('../components/Spinner');

var Buttons = React.createClass({
	render () {
		return (
			<div className="page-body">
				<h1>Spinner</h1>
				<div className="g-row">
					<div className="g-col">
						<h2 className="u-padding-top-lg">Standard</h2>
						<div className="demo-box">
							<Spinner type="default" />
						</div>
					</div>
					<div className="g-col">
						<h2 className="u-padding-top-lg">Primary</h2>
						<div className="demo-box">
							<Spinner type="primary" />
						</div>
					</div>
					<div className="g-col">
						<h2 className="u-padding-top-lg">Inverted</h2>
						<div className="demo-box demo-box--inverted">
							<Spinner type="inverted" />
						</div>
					</div>
				</div>

				<h2 className="u-padding-top-lg">Use in Buttons</h2>
				<button type="button" className="btn btn-default u-margin-right-xs">
					<Spinner type="primary" />
				</button>
				<button type="button" className="btn btn-default u-margin-right-xs">
					<Spinner type="primary" />
					Saving
				</button>
				<button type="button" className="btn btn-primary u-margin-right-xs">
					<Spinner type="inverted" />
					Saving
				</button>
				<hr />
				<button type="button" className="btn btn-default btn-lg u-margin-right-xs">
					<Spinner type="primary" />
				</button>
				<button type="button" className="btn btn-default btn-lg u-margin-right-xs">
					<Spinner type="primary" />
					Saving
				</button>
				<button type="button" className="btn btn-primary btn-lg u-margin-right-xs">
					<Spinner type="inverted" />
					Saving
				</button>
				<hr />
				<button type="button" className="btn btn-default btn-sm u-margin-right-xs">
					<Spinner type="primary" />
				</button>
				<button type="button" className="btn btn-default btn-sm u-margin-right-xs">
					<Spinner type="primary" />
					Saving
				</button>
				<button type="button" className="btn btn-primary btn-sm u-margin-right-xs">
					<Spinner type="inverted" />
					Saving
				</button>
				<hr />
				<button type="button" className="btn btn-default btn-xs u-margin-right-xs">
					<Spinner type="primary" />
				</button>
				<button type="button" className="btn btn-default btn-xs u-margin-right-xs">
					<Spinner type="primary" />
					Saving
				</button>
				<button type="button" className="btn btn-primary btn-xs u-margin-right-xs">
					<Spinner type="inverted" />
					Saving
				</button>
				<hr />
				<button type="button" className="btn btn-default u-margin-right-xs" disabled>
					<Spinner type="primary" />
				</button>
				<button type="button" className="btn btn-default u-margin-right-xs" disabled>
					<Spinner type="primary" />
					Saving
				</button>
				<button type="button" className="btn btn-primary u-margin-right-xs" disabled>
					<Spinner type="inverted" />
					Saving
				</button>
			</div>
		);
	}
});

module.exports = Buttons;
