var React = require('react'),
	Router = require('react-router');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>React Express Project</h1>
				<h2><a href="http://github.com/JedWatson/react-express-starter">View project on GitHub</a></h2>
				<div className="nav">
					<Router.Link to="one">Page One</Router.Link>
					&nbsp; | &nbsp;
					<Router.Link to="two">Page Two</Router.Link>
				</div>
				<this.props.activeRouteHandler/>
				<div className="footer">
					Copyright &copy; Jed Watson 2014. MIT Licensed.
				</div>
			</div>
		);
	}
});

var One = React.createClass({
	render: function() {
		return (
			<div>First page</div>
		);
	}
});

var Two = React.createClass({
	render: function() {
		return (
			<div>Second Page</div>
		);
	}
});

var routes = (
	<Router.Routes location="history">
		<Router.Route name="app" path="/" handler={App}>
			<Router.Route name="one" path="/one" handler={One}/>
			<Router.Route name="two" path="/two" handler={Two}/>
			<Router.DefaultRoute handler={One}/>
		</Router.Route>
	</Router.Routes>
);

React.renderComponent(routes, document.body);
