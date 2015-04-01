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
				<Router.Link to="home">Home</Router.Link>
				<Router.Link to="buttons">Buttons</Router.Link>
				<Router.Link to="forms">Forms</Router.Link>
				<Router.Link to="spinner">Spinner</Router.Link>
				<Router.Link to="grid">Grid</Router.Link>
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

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={require('../routes/Home')} />
		<Router.Route name="buttons" path="/buttons" handler={require('../routes/Buttons')} />
		<Router.Route name="forms" path="/forms" handler={require('../routes/Forms')} />
		<Router.Route name="spinner" path="/spinner" handler={require('../routes/Spinner')} />
		<Router.Route name="grid" path="/grid" handler={require('../routes/Grid')} />
		<Router.DefaultRoute handler={require('../routes/Home')} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
