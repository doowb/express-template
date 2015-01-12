/*!
 * express-template <https://github.com/doowb/express-template>
 *
 * Copyright (c) 2014 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */

var engineHandlebars = require('engine-assemble');
var Template = require('template');
var path = require('path');
var fs = require('fs');

/**
 * Expose `View`.
 */

module.exports = View;

/**
 * Initialize a new `View` with the given `name`.
 * This `View` class matches the interface for the `View` class in
 * [express] so it can replace the default `View` engine.
 *
 * Options:
 *
 *   - `defaultEngine` the default template engine name
 *   - `root` root path for view lookup
 *
 * @param {String} `name`
 * @param {Object} `options`
 * @api public
 */

function View(name, options) {
  options = options || {};
  initTemplate(options);

  this.name = name;
  this.root = options.root;
  this.defaultEngine = options.defaultEngine;
  var ext = this.ext = path.extname(name);
  if (!ext && !this.defaultEngine) throw new Error('No default engine was specified and no extension was provided.');
  if (!ext) name += (ext = this.ext = ('.' != this.defaultEngine[0] ? '.' : '') + this.defaultEngine);

  this.path = this.lookup(name);
  View.template.page(this.path);
}

/**
 * Lookup view by the given `path`
 *
 * @param {String} `path`
 * @return {String}
 * @api private
 */

View.prototype.lookup = function(filepath){
  var ext = this.ext;

  // <filepath>.<engine>
  if (!isAbsolute(filepath)) filepath = path.join(this.root, filepath);
  if (fs.existsSync(filepath)) return filepath;

  // <filepath>/index.<engine>
  filepath = path.join(path.dirname(filepath), path.basename(filepath, ext), 'index' + ext);
  if (fs.existsSync(filepath)) return filepath;
};

/**
 * Render with the given `options` and callback `fn(err, str)`.
 *
 * @param {Object} `options`
 * @param {Function} `fn`
 * @api public
 */

View.prototype.render = function(options, fn){
  var key = View.template.option('renameKey')(this.path);
  View.template.render(key, options, fn);
};

/**
 * Using the given configuration object, setup the `template` object.
 *
 * @param  {Object} `config` Configuration object containing:
 */

View.prototype.config = View.config = function (config) {
  initTemplate(config || {});
};

/**
 * `template` object exposed to allow for customization.
 * All instances of `View` will use the same `template` instance
 * so all views have access to anything on `template`.
 *
 * See [template] for more configuration options
 *
 * @api public
 */

View.prototype.template = View.template = null

/**
 * Helper function for initial configuration of the Template instance.
 *
 * @param  {Object} `config` Configuration object for setting up the `template` object.
 * @api private
 */

function initTemplate (config) {
  if (!View.template) {
    View.prototype.template = View.template = new Template();
    View.template.engine('hbs', engineHandlebars);
  }

  var root = config.root || path.join(__dirname, '../views');
  var data = config.data || false;
  var layouts = config.layouts || path.join(root, 'layouts/*.hbs');
  var partials = config.partials || path.join(root, '{partials,includes}/*.hbs');

  if (data) View.template.data(data);
  View.template.partials(partials);
  View.template.layouts(layouts);
};

/**
 * Determine if a path is absolute.
 * Method taken from [express]
 *
 * @param  {String} `filepath` Filepath to check.
 * @return {Boolean} If the `filepath` is absolute or not.
 */
function isAbsolute (filepath){
  if ('/' == filepath[0]) return true;
  if (':' == filepath[1] && '\\' == filepath[2]) return true;
  if ('\\\\' == filepath.substring(0, 2)) return true; // Microsoft Azure absolute path
};
