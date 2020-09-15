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
  var count = 0;
  var fileOneCount = getWordCount(filePathOne, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  });

  var fileTwoCount = getWordCount(filePathTwo, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  });

  callback(null, fileOneCount+fileTwoCount)
};

var result = getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt');
console.log(result); // not working...


module.exports = getTotalWordCount;