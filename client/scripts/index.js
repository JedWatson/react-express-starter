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
			<nav className="page-nav">
				<Router.Link to="home">Home</Router.Link>
				<Router.Link to="about">About</Router.Link>
				<Router.Link to="forms">Forms</Router.Link>
			</nav>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="page-container">
				<Header />
				<PageNav />
				<Router.RouteHandler/>
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	About: require('../routes/About'),
	Forms: require('../routes/Forms')
};

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={routes.Home} />
		<Router.Route name="about" path="/about" handler={routes.About} />
		<Router.Route name="forms" path="/forms" handler={routes.Forms} />
		<Router.DefaultRoute handler={routes.Home} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
