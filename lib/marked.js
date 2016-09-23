//sudo ln -s ~/projects/scripts/marked /usr/local/bin/
// $ marked ~/sites/README.md

// Imports
var path = require('path');
var fs = require('fs');
var marked = require('marked');

// var pwd = process.cwd();
var fileName = process.argv[2];
var filePath = fileName;

// set markdown conversion options
marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
});

// Custom CSS in /tmp/style.css
// table, th, td {
//   border-collapse: collapse;
//   border: 1px solid #ddd;
//   text-align: left;
//   padding: 7px;
// }
// ul {
//     list-style-type: square;
// }

console.log("<link rel='stylesheet' type='text/css' href='style-marked.css'>");
// open file
fs.readFile(filePath, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // Output file contents to stdout as html
  console.log(marked(data));
});

