var React = require('react');
var Router = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>My React Project</h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<nav className="primary-nav">
				<Router.Link to="home" className="primary-nav__brand" title="Home">
					<img src="./images/react-logo.svg" className="primary-nav__brand-src" />
				</Router.Link>
				{/*<Router.Link to="home">Home</Router.Link>*/}
				<Router.Link className="primary-nav__item" to="buttons">Buttons</Router.Link>
				<Router.Link className="primary-nav__item" to="forms">Forms</Router.Link>
				<Router.Link className="primary-nav__item" to="spinner">Spinner</Router.Link>
				<Router.Link className="primary-nav__item" to="grid">Grid</Router.Link>
			</nav>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="page-wrapper">
				<PageNav />
				<div className="page-body">
					<Router.RouteHandler/>
				</div>
				<div className="page-footer">
					{/*<div className="page-container">
						created with <span className="page-footer__icon">&hearts;</span> by <a href="https://twitter.com/jedwatson" target="_blank">@jedwatson</a> and <a href="https://twitter.com/jossmackison" target="_blank">@jossmackison</a>
					</div>*/}
					<div className="page-container">
						Copyright &copy; 2015 <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a> &middot; MIT License
					</div>
				</div>
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	Buttons: require('../routes/Buttons'),
	Forms: require('../routes/Forms'),
	Spinner: require('../routes/Spinner'),
	Grid: require('../routes/Grid')
};

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={routes.Home} />
		<Router.Route name="buttons" path="/buttons" handler={routes.Buttons} />
		<Router.Route name="forms" path="/forms" handler={routes.Forms} />
		<Router.Route name="spinner" path="/spinner" handler={routes.Spinner} />
		<Router.Route name="grid" path="/grid" handler={routes.Grid} />
		<Router.DefaultRoute handler={routes.Home} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
