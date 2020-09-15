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
  // YOUR CODE HERE
  getWordCount(filePathOne, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(data);
  })
  getWordCount(filePathTwo, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(data);
  })

};

module.exports = getTotalWordCount;