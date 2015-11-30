'use strict';

var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'build'), function(err) {
  console.error(err.stack);
  process.exit(1);
});
