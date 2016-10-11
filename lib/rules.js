var zpad = require('zpad');
var path = require('path');

exports.name = function (year, month, day, hour, minute, second, extension) {
  // Parameters
  //   ...
  //   extension
  //     string, without '.'
  var date = zpad(year, 4) + zpad(month, 2) + zpad(day, 2);
  var time = zpad(hour, 2) + zpad(minute, 2) + zpad(second, 2);
  return date + '_' + time + '.' + extension.toLowerCase();
};

exports.path = function (oldPath, newName) {
  // Return new path
  var dir = path.dirname(oldPath);
  return path.resolve(dir, newName);
};
