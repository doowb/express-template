# express-template [![NPM version](https://badge.fury.io/js/express-template.svg)](http://badge.fury.io/js/express-template)

> View replacement for Express using Template.

## Install
### Install with [npm](npmjs.org):

```bash
npm i express-template --save-dev
```

## Run tests

```bash
npm test
```

## Usage

```js
// create normal express app
var express = require('express');
var app = express();

// create an instance of Template to use
var Template = require('template');
var template = new Template();

// require in express-template
var View = require('express-template')(template);
// add some global configuration
View.config({
  data: ['data/*.json'],
  layouts: ['views/layouts/*.hbs'],
  partials: ['views/{partials, includes}/*.hbs']
});

// configure the express app so it uses View
app.set('view', View);
```

## API
### [View](index.js#L50)

Initialize a new `View` with the given `name`. This `View` class matches the interface for the `View` class in [express] so it can replace the default `View` engine.

* `name` **{String}**    
* `options` **{Object}**    

Options:

  - `defaultEngine` the default template engine name
  - `root` root path for view lookup

### [.render](index.js#L93)

* `options` **{Object}**    
* `fn` **{Function}**    

Render with the given `options` and callback `fn(err, str)`.

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][issues].

## Author

**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 

## License
Copyright (c) 2015 Brian Woodward  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 14, 2015._

[issues]: https://github.com/doowb/express-template/issues
[express]: https://github.com/strongloop/express
