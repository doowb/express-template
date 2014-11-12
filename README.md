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

// require in express-template
var View = require('express-template');
// add some global configuration
View.config({
  data: ['./data/*.json'],
  layouts: ['./views/layouts/*.hbs'],
  partials: ['./views/{partials, includes}/*.hbs']
});

// configure the express app so it uses View
app.set('view', View);
```

## API
## [View](index.js#L40)

Initialize a new `View` with the given `name`. This `View` class matches the interface for the `View` class in [express] so it can replace the default `View` engine.

* `name` **{String}**    
* `options` **{Object}**    

Options:

  - `defaultEngine` the default template engine name
  - `root` root path for view lookup

## [.render](index.js#L83)

* `options` **{Object}**    
* `fn` **{Function}**    

Render with the given `options` and callback `fn(err, str)`.

## [.template](index.js#L108)

`template` object exposed to allow for customization. All instances of `View` will use the same `template` instance so all views have access to anything on `template`.

See [template] for more configuration options

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][issues].

## Author

**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 

## License
Copyright (c) 2014 Brian Woodward  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/jonschlinkert/verb) on November 12, 2014._

[issues]: https://github.com/doowb/express-template/issues
[engine-utils]: https://github.com/jonschlinkert/engine-utils
[wordwrap]: https://github.com/substack/node-wordwrap
[optimist]: https://github.com/substack/node-optimist
[async]: https://github.com/caolan/async
[amdefine]: http://github.com/jrburke/amdefine
[source-map]: https://github.com/mozilla/source-map
[uglify-js]: http://lisperator.net/uglifyjs
[handlebars]: http://www.handlebarsjs.com/
[engine-handlebars]: https://github.com/jonschlinkert/engine-handlebars
[array-flatten]: https://github.com/blakeembrey/array-flatten
[arrayify-compact]: https://github.com/jonschlinkert/arrayify-compact
[array-slice]: https://github.com/jonschlinkert/array-slice
[is-path-cwd]: https://github.com/sindresorhus/is-path-cwd
[path-is-inside]: https://github.com/domenic/path-is-inside
[is-path-inside]: https://github.com/sindresorhus/is-path-inside
[is-path-in-cwd]: https://github.com/sindresorhus/is-path-in-cwd
[rimraf]: https://github.com/isaacs/rimraf
[delete]: https://github.com/jonschlinkert/delete
[extend-shallow]: https://github.com/jonschlinkert/extend-shallow
[array-differ]: https://github.com/sindresorhus/array-differ
[array-uniq]: https://github.com/sindresorhus/array-uniq
[array-union]: https://github.com/sindresorhus/array-union
[graceful-fs]: https://github.com/isaacs/node-graceful-fs
[inherits]: https://github.com/isaacs/inherits
[lru-cache]: https://github.com/isaacs/node-lru-cache
[sigmund]: https://github.com/isaacs/sigmund
[minimatch]: https://github.com/isaacs/minimatch
[wrappy]: https://github.com/npm/wrappy
[once]: https://github.com/isaacs/once
[glob]: https://github.com/isaacs/node-glob
[globby]: https://github.com/sindresorhus/globby
[is-relative]: https://github.com/jonschlinkert/is-relative
[is-absolute]: https://github.com/jonschlinkert/is-absolute
[underscore]: http://underscorejs.org
[underscore\.string]: http://epeli.github.com/underscore.string/
[argparse]: https://github.com/nodeca/argparse
[esprima]: http://esprima.org
[js-yaml]: https://github.com/nodeca/js-yaml
[kind-of]: https://github.com/jonschlinkert/kind-of
[normalize-path]: https://github.com/jonschlinkert/normalize-path
[relative]: https://github.com/jonschlinkert/relative
[fs-utils]: https://github.com/assemble/fs-utils
[highlight\.js]: http://highlightjs.org/
[iconv-lite]: https://github.com/ashtuchkin/iconv-lite
[lodash]: http://lodash.com/
[map-files]: https://github.com/jonschlinkert/map-files
[marked]: https://github.com/chjj/marked
[findup-sync]: https://github.com/cowboy/node-findup-sync
[resolve]: https://github.com/substack/node-resolve
[stack-trace]: https://github.com/felixge/node-stack-trace
[globule]: https://github.com/cowboy/node-globule
[matchdep]: https://github.com/tkellen/node-matchdep
[resolve-dep]: https://github.com/jonschlinkert/resolve-dep
[has-color]: https://github.com/sindresorhus/has-color
[ansi-styles]: https://github.com/sindresorhus/ansi-styles
[chalk]: https://github.com/sindresorhus/chalk
[matchkeys]: https://github.com/jonschlinkert/matchkeys
[sort-object]: https://github.com/helpers/sort-object
[handy]: https://github.com/openmason/handy
[htmlparser]: http://github.com/tautologistics/node-htmlparser
[minimist]: https://github.com/substack/minimist
[to]: https://github.com/openmason/to
[handlebars-helpers]: https://github.com/assemble/handlebars-helpers
[engine-assemble]: https://github.com/doowb/engine-assemble
[for-own]: https://github.com/jonschlinkert/for-own
[make-iterator]: https://github.com/jonschlinkert/make-iterator
[arr]: https://github.com/jonschlinkert/arr
[arr-flatten]: https://github.com/jonschlinkert/arr-flatten
[escape-string-regexp]: https://github.com/sindresorhus/escape-string-regexp
[ansi-regex]: https://github.com/sindresorhus/ansi-regex
[has-ansi]: https://github.com/sindresorhus/has-ansi
[strip-ansi]: https://github.com/sindresorhus/strip-ansi
[supports-color]: https://github.com/sindresorhus/supports-color
[class-extend]: https://github.com/SBoudrias/class-extend
[eventemitter2]: https://github.com/hij1nx/EventEmitter2
[getobject]: https://github.com/cowboy/node-getobject
[expander]: https://github.com/tkellen/expander
[isobject]: https://github.com/jonschlinkert/isobject
[get-value]: https://github.com/jonschlinkert/get-value
[ends-with]: https://github.com/jonschlinkert/ends-with
[path-ends-with]: https://github.com/jonschlinkert/path-ends-with
[parse-filepath]: https://github.com/jonschlinkert/parse-filepath
[read-data]: https://github.com/jonschlinkert/read-data
[replacements]: https://github.com/jonschlinkert/replacements
[namespace-data]: https://github.com/jonschlinkert/namespace-data
[is-plain-object]: https://github.com/jonschlinkert/is-plain-object
[mixin-deep]: https://github.com/jonschlinkert/mixin-deep
[option-cache]: https://github.com/jonschlinkert/option-cache
[expand-hash]: https://github.com/doowb/expand-hash
[frep]: https://github.com/jonschlinkert/frep
[mkdirp]: https://github.com/substack/node-mkdirp
[verbalize]: https://github.com/jonschlinkert/verbalize
[plasma]: https://github.com/jonschlinkert/plasma
[preserve]: https://github.com/jonschlinkert/preserve
[set-object]: https://github.com/jonschlinkert/set-object
[config-cache]: https://github.com/jonschlinkert/config-cache
[ms]: https://github.com/guille/ms.js
[debug]: https://github.com/visionmedia/debug
[object-pick]: https://github.com/jonschlinkert/object-pick
[delims]: https://github.com/jonschlinkert/delims
[path-to-regexp]: https://github.com/component/path-to-regexp
[utils-merge]: https://github.com/jaredhanson/utils-merge
[en-route]: https://github.com/jonschlinkert/en-route
[helper-cache]: https://github.com/jonschlinkert/helper-cache
[engine-cache]: https://github.com/jonschlinkert/engine-cache
[engine-lodash]: https://github.com/jonschlinkert/engine-lodash
[regexp-special-chars]: https://github.com/jonschlinkert/regexp-special-chars
[escape-delims]: https://github.com/jonschlinkert/escape-delims
[for-in]: https://github.com/jonschlinkert/for-in
[cwd]: https://github.com/jonschlinkert/cwd
[load-pkg]: https://github.com/jonschlinkert/load-pkg
[lookup-path]: https://github.com/jonschlinkert/lookup-path
[multimatch]: https://github.com/sindresorhus/multimatch
[boson]: https://github.com/jonschlinkert/boson
[load-helpers]: https://github.com/assemble/load-helpers
[randomatic]: https://github.com/jonschlinkert/randomatic
[falsey]: https://github.com/jonschlinkert/falsey
[load-templates]: https://github.com/jonschlinkert/load-templates
[layouts]: https://github.com/jonschlinkert/layouts
[coffee-script]: http://coffeescript.org
[toml]: https://github.com/BinaryMuse/toml-node
[gray-matter]: https://github.com/assemble/gray-matter
[has-any]: https://github.com/jonschlinkert/has-any
[has-value]: https://github.com/jonschlinkert/has-value
[reduce-object]: https://github.com/jonschlinkert/reduce-object
[has-any-deep]: https://github.com/jonschlinkert/has-any-deep
[object\.omit]: https://github.com/jonschlinkert/object.omit
[object\.pick]: https://github.com/jonschlinkert/object.pick
[omit-empty]: https://github.com/jonschlinkert/omit-empty
[array-difference]: https://github.com/jugglinmike/array-difference
[omit-keys]: https://github.com/jonschlinkert/omit-keys
[clone-stats]: https://github.com/hughsk/clone-stats
[vinyl]: http://github.com/wearefractal/vinyl
[parser-front-matter]: https://github.com/jonschlinkert/parser-front-matter
[template]: https://github.com/jonschlinkert/template
