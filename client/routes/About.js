var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'VIEW_About',
	render () {
		return (
			<div className="page-container">
				<h2>About Page</h2>
				<p>Praesent dictum condimentum dolor quis vulputate. Pellentesque faucibus sem sit amet nisl pellentesque laoreet. In et nunc scelerisque, convallis ligula sit amet, fermentum orci. Ut venenatis elit pulvinar, euismod odio mollis, aliquam purus. Proin a purus massa. Morbi porttitor nisl a sem mollis, id aliquam diam blandit. Sed sed porta erat. Aenean congue lorem vitae quam rutrum accumsan.</p>
				<p>Duis vestibulum gravida ipsum ac egestas. In lacinia ante felis, in posuere ipsum malesuada vel. Suspendisse dictum condimentum ante quis sodales. Quisque eu laoreet purus. Donec gravida dui eget elementum aliquet.</p>
			</div>
		);
	}
});