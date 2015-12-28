var freeStyle = require('free-style')

var globalSheet

exports.style = function(object) {
  requestInject()
  return globalSheet.registerStyle(object)
}

exports.keyframe = function(object) {
  requestInject()
  return globalSheet.registerKeyframes(object)
}

exports.rule = function(query, object) {
  requestInject()
  return globalSheet.registerRule(query, object)
}

var requestInject = function() {
  if (globalSheet) return
  globalSheet = freeStyle.create()
  requestAnimationFrame(function() {
    globalSheet.inject()
    globalSheet = null
  })
}
