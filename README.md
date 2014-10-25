# traitxjs

A Trait extension library for your day-to-day JavaScript apps :)

# Motivation

Composition over inheritance <3

# Usage

```bash
$ npm install traitxjs
```

# Examples

For simplicity sake, will use the following Batman object in examples below:

```javascript
var Batman = {
  name: 'Batman',
  fightCrime: function () { console.log('Pow! Sock! Bang!') }
}
```

Applying a constructor function as a trait:

```javascript
var traitxjs = require('traitxjs')

// Constructor function to be used as a Trait
var BatBelt = function () {
  this.useBatBelt = function () { console.log('throwing ninja star!') }
}

var BatmanWithBatBelt = traitxjs(Batman).with(BatBelt)

console.log(BatmanWithBatBelt === Batman) // true
console.log(BatmanWithBatBelt.fightCrime()) // Pow! Sock! Bang!
console.log(BatmanWithBatBelt.useBatBelt()) // throwing ninja star!
```

# Contact
