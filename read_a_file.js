var fs = require('fs');
var filename = 'file1.txt';
fs.readFile(filename, function(err, buffer) {
  if (err) {
    console.log(err.message);
    return;
  }
  var contents = buffer.toString();
  var upperCase = contents.toUpperCase();
  console.log('Got binary data: ', upperCase);
});
