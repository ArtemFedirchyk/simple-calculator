/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees  = require('ember-cli/node_modules/broccoli-merge-trees');

var mergeTrees  = require('broccoli-merge-trees');
var vulcanize = require('broccoli-vulcanize');

var app = new EmberApp();

var polymerVulcanize = vulcanize('app', {
  input: 'elements.html',
  output: 'assets/vulcanized.html',
  csp: true,
  inline: true,
  strip: false,
  excludes: {
    imports: ["(^data:)|(^http[s]?:)|(^\/)"],
    scripts: ["(^data:)|(^http[s]?:)|(^\/)"],
    styles: ["(^data:)|(^http[s]?:)|(^\/)"]
  }
});



// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = mergeTrees([
	polymerVulcanize,
	app.toTree()
]);
