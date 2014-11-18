var express = require('express'),
	browserify = require('browserify-middleware'),
	reactify = require('reactify'),
	less = require('less-middleware'),
	nunjucks = require('nunjucks'),
	config = require('./client/config');

var app = express();

nunjucks.configure('server/templates/views', {
    express: app
});

app.get('/js/' + config.common.bundle, browserify(config.common.packages));
app.use('/js', browserify('./client/scripts', {
	external: config.common.packages,
	transform: ['reactify']
}));

app.use(less('public'));
app.use(express.static('public'));

app.get('*', function(req, res) {
    res.render('index.html');
});

var server = app.listen(process.env.PORT || 3000, function() {
	console.log('\nServer ready on port %d\n', server.address().port);
});
