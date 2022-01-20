let input = process.argv.slice(2);

const fs = require('fs');
const request = require('request');

request(input[0], (error, response, body) => {
  fs.writeFile(input[1], body, err => {
    if (err) {
      console.log(error);
      console.log(response);
      console.log(err);
      return;
    }
    fs.stat(input[1], (err, stats) => {
      if (err) {
        console.log(`File not written. Download has failed.`);
        return;
      }
      console.log(`Download and saved ${stats.size} bytes to ${input[1]}.`);
    });
  });
});