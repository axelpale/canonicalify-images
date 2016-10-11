var path = require('path');

exports.images = function (paths) {
  // Filter only images from given array of paths.
  var allowed = ['.jpg', '.png', '.jpeg'];
  return paths.filter(function (p) {
    var ext = path.extname(p).toLowerCase();
    var isImage = (allowed.indexOf(ext) > -1);
    return isImage;
  });
}

exports.shootingTime = function (exif) {
  // Find shooting time form exif object

  // TODO find alternatives if DateTimeOriginal is not available.

  return exif.exif.DateTimeOriginal;
}
