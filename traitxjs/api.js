'use strict';

var mixin = require('object-mixin') // Object.mixin polyfill
  , defineProperty = require('./utils').defineProperty;

module.exports = {
  withTrait: function (trait) {
    return Object.mixin(this, trait);
  },

  withTraits: function (/* arguments */) {
    var traits = Array.prototype.slice.call(arguments);

    return traits.reduce(function (target, trait) {
      return Object.mixin(target, trait);
    }, this);
  },

  hasTrait: function (trait) {
    var target = this;
    var traitProperties = {};

    if (typeof trait === 'function') trait.call(traitProperties);
    else if (typeof trait === 'object') traitProperties = trait;

    return Object.keys(traitProperties).reduce(function (hasTrait, property) {
      return target.hasOwnProperty(property) ? hasTrait : false;
    }, true);
  },

  hasTraits: function (/* arguments */) {
    var target = this;
    var traits = Array.prototype.slice.call(arguments);

    return traits.reduce(function (hasTraits, trait) {
      return target.hasTrait(trait);
    });
  },

  hasAnyTraits: function (/* arguments */) {
    var target = this;
    var traits = Array.prototype.slice.call(arguments);

    return traits.reduce(function (hasTraits, trait) {
      return target.hasTrait(trait) ? true : hasTraits;
    }, false);
  },

  dropTrait: function (trait) {
    var target = this;

    return Object.keys(trait).reduce(function (target, traitProperty) {
      return delete target[traitProperty] && target;
    }, target);
  },
};

