'use strict';

// TODO use 'path' module to join path components and avoid arch specifics
var expect = require('chai').expect
  , TraitSupport = require('../traitxjs')

describe('TraitSupport', function () {
  var Runnable = function () { this.run = 'perform run action' }
  var Jumpable = { jump: 'perform jump action' }

  it('adds trait support API to a given object', function () {
    var obj = {}
    var obj = TraitSupport(obj)

    expect(obj).to.have.property('hasTrait')
    expect(obj).to.have.property('hasTraits')
    expect(obj).to.have.property('withTrait')
    expect(obj).to.have.property('withTraits')
  })

  describe('#withTrait', function () {
    it('applies a constructor trait to a given object', function () {
      var obj = TraitSupport({}).withTrait(Runnable)

      expect(obj).to.have.property('run')
      expect(obj.run).to.equal('perform run action')
    })

    it('adds applies a properties trait to a given object', function () {
      var obj = TraitSupport({}).withTrait(Jumpable)

      expect(obj).to.have.property('jump')
      expect(obj.jump).to.equal('perform jump action')
    })
  })

  describe('#withTraits', function () {
    it('applies multiple traits to a given object', function () {
      var obj = TraitSupport({}).withTraits(Runnable, Jumpable)

      expect(obj).to.include.keys('run', 'jump')
      expect(obj.run).to.equal('perform run action')
      expect(obj.jump).to.equal('perform jump action')
    })
  })

  describe('#hasTrait', function () {
    it('checks whether or not an object implements a given trait', function () {
      var obj = TraitSupport({})

      expect(obj.hasTrait(Runnable)).to.be.false

      var obj = obj.withTrait(Runnable)

      expect(obj.hasTrait(Runnable)).to.be.true
    })
  })

  describe('#hasTraits', function () {
    it('checks whether or not an object implements multiple wraits', function () {
      var obj = TraitSupport({})

      expect(obj.hasTraits(Runnable, Jumpable)).to.be.false

      obj.withTrait(Runnable)

      expect(obj.hasTraits(Runnable, Jumpable)).to.be.false

      obj.withTrait(Jumpable)

      expect(obj.hasTraits(Runnable, Jumpable)).to.be.true
    })
  })
})
