'use strict';

module.exports.defineProperty = function (target, name, value) {
  return Object.defineProperty(target, name, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
};
