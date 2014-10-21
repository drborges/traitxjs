'use strict';

var traitxjsApi = require('./api')
  , defineProperty = require('./utils').defineProperty;

module.exports = function traitxjs(target) {
  return Object.keys(traitxjsApi).reduce(function (target, property) {
    return defineProperty(target, property, traitxjsApi[property]);
  }, target);
};
