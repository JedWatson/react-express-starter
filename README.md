react-express-starter
=====================

ReactJS / Express Starter Project.

This is the prototype for the [react-express](https://github.com/JedWatson/generator-react-express) yeoman generator.

If you want to create your own react-express project, you should run the generator; if you want to preview what it will generate, see this project.

## Usage

First, install dependencies from npm:

```
npm install
```

To start the server:

```
node server
```

## Development

The client app is in `/client`, the server is in `/server`, and everything in `/public` will be served as static assets.

`.less` files in the `/public/*` folder will automatically be processed into `.css` files.

`.js` files in the `/client/scripts/*` folder will be browserified when requested from `/js/*`.

A common browserify package will be generated at `/js/common.js` containing all the packages specified in `/client/config.js`.

