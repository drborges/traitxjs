'use strict';

var TraitSupportApi = require('./support')
  , defineProperty = require('./utils').defineProperty;

module.exports = function TraitSupport(target) {
  return Object.keys(TraitSupportApi).reduce(function (target, property) {
    return defineProperty(target, property, TraitSupportApi[property]);
  }, target);
};
