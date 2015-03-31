var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="page-body">
				<h2>Welcome</h2>
				<p>This is the React + Express starter project. It includes <a href="https://facebook.github.io/react/" target="_blank">React</a> for the client, <a href="http://expressjs.com/" target="_blank">express</a> for the server, a lightweight CSS framework built with <a href="http://lesscss.org/" target="_blank">LESS</a>, <a href="https://github.com/rackt/react-router" target="_blank">react-router</a> and several UI components to get you started quickly.</p>
				<p>Browse the pages above to see examples of the included layout and form components, then dive into the code in <code>/client</code> to get started customising it.</p>
				<p>Public assets are served from the <code>/public</code> folder, and anything .css file you include from the <code>/public/styles</code> folder will be built from the corresponding <code>.less</code> file.</p>
				<p>The express server configuration is in <code>/server</code>. Here you can add custom server-side middleware, routes and templates, including API endpoints.</p>
				<hr />
				<p><a href="https://github.com/JedWatson/react-express-starter" target="_blank">View the GitHub Project</a></p>
				<hr />
				<p>Copyright &copy; 2015 <a href="http://www.thinkmill.com.au">Thinkmill</a>. MIT License.</p>
			</div>
		);
	}
});

module.exports = Home;
