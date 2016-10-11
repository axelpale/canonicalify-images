#!/usr/bin/env node

var program = require('commander');
var read = require('./lib/read');
var find = require('./lib/find');
var parse = require('./lib/parse');
var rules = require('./lib/rules');
var fs = require('fs');
var path = require('path');
var async = require('async');

var renameImageFile = function (imagePath, callback) {
  read.exif(imagePath, function (err, exif) {
    if (err) {
      callback(err);
    }  // else

    var dateTimeString = find.shootingTime(exif);

    var dt = parse.exifDateTime(dateTimeString);
    var ext = parse.extension(imagePath);

    var newName = rules.name(dt.year, dt.month, dt.day,
                             dt.hour, dt.minute, dt.second, ext);
    var newPath = rules.path(imagePath, newName);

    fs.rename(imagePath, newPath, function (err) {
      if (err) {
        callback(err);
      }  // else

      console.log('Renamed', imagePath, 'to', newPath);
      callback(null);
    });
  });
};

program
  .arguments('<image or dir>')
  .action(function (imagePath) {
    console.log('Making canonical:', imagePath);

    if (fs.lstatSync(imagePath).isDirectory()) {

      var files = fs.readdirSync(imagePath);
      var images = find.images(files);
      console.log(images);
      var imagePaths = images.map(function (img) {
        return path.resolve(imagePath, img);
      });
      console.log(imagePaths);
      async.map(imagePaths, renameImageFile, function (err) {
        if (err) {
          throw err;
        }  // else
        console.log('Finished successfully.');
      });

    } else {

      renameImageFile(imagePath, function (err) {
        if (err) {
          throw err;
        }  // else
        console.log('Finished successfully.');
      });

    }

  })
  .parse(process.argv);
