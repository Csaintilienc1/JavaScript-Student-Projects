var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {

  getWordCount(filePathOne, (err, firstCount) => {
    if (err) {
      throw err;
    }
    getWordCount(filePathTwo, (err, secondCount) => {
      if (err) {
        throw err;
      }
      callback(null, firstCount + secondCount);
    });
  });
};

module.exports = getTotalWordCount;