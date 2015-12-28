var freeStyle = require('free-style')

exports.sheet = freeStyle.create()
exports.style = object => exports.sheet.registerStyle(object)
exports.keyframe = object => exports.sheet.registerKeyframes(object)
exports.rule = (query, object) => exports.sheet.registerRule(query, object)
