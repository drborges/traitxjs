var Assertion = require('chai').Assertion

Assertion.addMethod('trait', function (trait) {
  var obj = this._obj;

  this.assert(
    obj.hasTrait(trait),
    "expected #{this} to have the following trait properties: #{exp}",
    "expected #{this} to not have the following trait properties: #{act}",
    Object.keys(trait), // expected
    Object.keys(obj) // actual
  );
});

Assertion.addMethod('traits', function (traits) {
  var chai = this;
  var obj = this._obj;

  traits.forEach(function (trait) {
    chai.assert(
      obj.hasTrait(trait),
      "expected #{this} to have the following trait properties: #{exp}",
      "expected #{this} to not have the following trait properties: #{act}",
      Object.keys(trait), // expected
      Object.keys(obj) // actual
    );
  });
});
