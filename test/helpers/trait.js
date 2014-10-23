module.exports = function (chai, utils) {

  var assertThatSubjectHasTrait = function (ctx, obj, trait) {
    ctx.assert(
      obj.hasTrait(trait),
      "expected #{this} to have the following trait properties: #{exp}",
      "expected #{this} to not have the following trait properties: #{act}",
      Object.keys(trait), // expected
      Object.keys(obj) // actual
    );
  };

  chai.Assertion.addMethod('trait', function (trait) {
    var subject = this._obj;
    assertThatSubjectHasTrait(this, subject, trait)
  });

  chai.Assertion.addMethod('traits', function (traits) {
    var ctx = this;
    var subject = ctx._obj;

    traits.forEach(function (trait) {
      assertThatSubjectHasTrait(ctx, subject, trait)
    });
  });

};
