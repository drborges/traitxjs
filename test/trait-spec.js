'use strict';

var traitxjs = require(src('traitxjs'))
  , traitxjsApi = require(src('traitxjs/api'))

describe('traitxjs', function () {
  var Runnable = function () { this.run = 'perform run action' }
  var Jumpable = { jump: 'perform jump action' }

  describe('support', function () {
    it('adds trait support API to a given object', function () {
      var obj = traitxjs({})

      expect(obj).to.have.trait(traitxjsApi)
    })

    it('adds trait support API to a given constructor function', function () {
      var obj = traitxjs(Runnable)

      expect(obj).to.have.trait(traitxjsApi)
    })
  })

  describe('#withTrait', function () {
    it('applies a constructor trait to a given object', function () {
      var obj = traitxjs({}).withTrait(Runnable)

      expect(obj).to.have.trait(Runnable)
      expect(obj.run).to.equal('perform run action')
    })

    it('adds applies a properties trait to a given object', function () {
      var obj = traitxjs({}).withTrait(Jumpable)

      expect(obj).to.have.trait(Jumpable)
      expect(obj.jump).to.equal('perform jump action')
    })
  })

  describe('#withTraits', function () {
    it('applies multiple traits to a given object', function () {
      var obj = traitxjs({}).withTraits(Runnable, Jumpable)

      expect(obj).to.have.traits(Runnable, Jumpable)
      expect(obj.run).to.equal('perform run action')
      expect(obj.jump).to.equal('perform jump action')
    })
  })

  describe('#hasTrait', function () {
    it('checks whether or not an object implements a given trait', function () {
      var obj = traitxjs({})

      expect(obj).to.not.have.trait(Runnable)

      var obj = obj.withTrait(Runnable)

      expect(obj).to.have.trait(Runnable)
    })
  })

  describe('#hasTraits', function () {
    it('checks whether or not an object implements multiple wraits', function () {
      var obj = traitxjs({})

      expect(obj.hasTraits(Runnable, Jumpable)).to.be.false

      obj.withTrait(Runnable)

      expect(obj.hasTraits(Runnable, Jumpable)).to.be.false

      obj.withTrait(Jumpable)

      expect(obj.hasTraits(Runnable, Jumpable)).to.be.true
    })
  })

  describe('#hasAnyTraits', function () {
    it('does not have either of the given traits', function () {
      var obj = traitxjs({})

      expect(obj.hasAnyTraits(Runnable, Jumpable)).to.be.false
    })

    it('has one of the given traits', function () {
      var runnable = traitxjs({}).withTrait(Runnable)

      expect(runnable.hasAnyTraits(Runnable, Jumpable)).to.be.true
    })

    it('has both given traits', function () {
      var runnable = traitxjs({}).withTraits(Runnable, Jumpable)

      expect(runnable.hasAnyTraits(Runnable, Jumpable)).to.be.true
    })
  })

  describe('#dropTrait', function () {
    it('removes constructor trait implementation from a given object', function () {
      var jumpable = traitxjs({}).withTrait(Jumpable).dropTrait(Jumpable)

      expect(jumpable).to.not.have.trait(Jumpable)
    })

    it('removes property trait implementation from a given object', function () {
      var runnable = traitxjs({}).withTrait(Runnable).dropTrait(Runnable)

      expect(runnable).to.not.have.trait(Runnable)
    })
  })

  describe('#dropTraits', function () {
    it('removes traits from a given object', function () {
      var obj = traitxjs({}).withTraits(Runnable, Jumpable).dropTraits(Jumpable, Runnable)

      expect(obj).to.not.have.traits(Runnable, Jumpable)
    })
  })
})
