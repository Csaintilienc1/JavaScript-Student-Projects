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
  filePathOne = path.join(__dirname, fileOne.txt);
  filPathTwo = path.join(__dirname, fileTwo.txt);
  callback(filePathOne, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  })
  callback(filePathTwo, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  })

};

module.exports = getTotalWordCount;