// Not transpiled file, so use only CommonJS and ES5

// Register babel to transpile before run
require('babel-register')();

// Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
