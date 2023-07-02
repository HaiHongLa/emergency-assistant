const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

// Retrieve command-line arguments
const args = process.argv.slice(2);
const username = args[0];
const password = args[1];
const firstAidId = args[2]
const firstAidName = args[3]
const fileLocation = args[4];

// Read the Markdown file
fs.readFile(fileLocation, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Create the request payload
  const payload = {
    username,
    password,
    firstAidId,
    firstAidName,
    markdownContent: data,
  };
  // Make the POST request
  axios.post(`${process.env.SERVER_URL}/api/first-aid/create`, payload)
    .then(response => {
      console.log('POST request successful');
    })
    .catch(error => {
      console.error('Error making the POST request');
    });
});
