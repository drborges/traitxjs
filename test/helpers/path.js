var path = require('path')

module.exports.src = function(relativePath) {
  return path.join('..', relativePath)
}
