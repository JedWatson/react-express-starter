react-express-starter
=====================

ReactJS / Express Starter Project.

## Why? How?

This is a starter project that you can use as a base for React Applications.

It comes with

* React Router
* CSS Framework (w/ LESS)
* React UI Components (WIP)
* ESLint

It uses

* Express for serving static assets, templates and API endpoints
* Nunjucks for server-side template rendering
* Browserify for building your client application
* Babel for transforming JSX and ES6

### This is the base for a Yeoman Generator

This is the prototype for the [react-express](https://github.com/JedWatson/generator-react-express) yeoman generator.

If you want to create your own react-express project, you should run the generator; if you want to preview what it will generate, see this project.

## Usage

First, install dependencies from npm:

```
npm install
```

To start the server:

```
npm start
```

To lint the code:

```
npm run lint
```

## Development

The client app is in `/client`, the server is in `/server`, and everything in `/public` will be served as static assets.

`.less` files in the `/public/*` folder will automatically be processed into `.css` files.

`.js` files in the `/client/scripts/*` folder will be browserified when requested from `/js/*`.

A common browserify package will be generated at `/js/common.js` containing all the packages specified in `/client/config.js`.

## License

Copyright &copy; 2015 [Thinkmill](http://www.thinkmill.com.au). Licensed under the [MIT License](https://github.com/JedWatson/react-express-starter/blob/master/LICENSE).

