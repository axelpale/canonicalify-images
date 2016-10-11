var exif = require('exif');
var ExifImage = exif.ExifImage;

exports.exif = function (imagePath, callback) {
  // Parameters
  //   imagePath
  //   callback
  //     function (err, exif)
  try {
    new ExifImage({ image : imagePath }, function (error, exifData) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, exifData);
      }
    });
  } catch (error) {
    callback(error, null);
  }
};
