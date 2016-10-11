var path = require('path');

exports.extension = function (imagePath) {
  // Returns:
  //   string, extionsion without dot, e.g. 'jpg'
  var dotext = path.extname(imagePath);
  var ext = dotext.split('.').pop();
  return ext;
};

exports.exifDateTime = function (dateTimeString) {
  // Parameters
  //   dateTimeString
  //     Example: '2016:10:09 14:58:59'
  //
  // Return:
  //   {
  //     year: <int>,
  //     month: <int>,
  //     day: <int>,
  //     hour: <int>,
  //     minute: <int>,
  //     second: <int>
  //   }

  var dt = dateTimeString.split(' ');
  var ymd = dt[0].split(':');
  var hms = dt[1].split(':');

  return {
    year: parseInt(ymd[0]),
    month: parseInt(ymd[1]),
    day: parseInt(ymd[2]),
    hour: parseInt(hms[0]),
    minute: parseInt(hms[1]),
    second: parseInt(hms[2]),
  };
};
