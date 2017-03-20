//Write a program to prompt the user for two file names, the first file will be
//the input and the second file will be the output. The program will read in the
//contents of the input file,convert its text to all caps, and then write the
//resulting contents to the output file.

//Trigger an error by running the program with an non-existing input file,
//ensure that the error is properly displayed. Trigger an error by running the
//program with an output file in a non-existant directory, such as
//thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

var fs = require('fs');
var input = 'file1.txt';
var output = 'output.txt';
fs.readFile(input, function(err, buffer) {
  if (err) {
    console.log(err.message);
    return;
  }
  var contents = buffer.toString();
  var upperCase = contents.toUpperCase();
  fs.writeFile(output, upperCase, function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('It worked!');
  });
});
