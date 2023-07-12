const fs = require('fs');

// Create a file named "welcome.txt" containing one line "Hello World"
fs.writeFile('welcome.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File created successfully.');
});

// Read and console.log data from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
