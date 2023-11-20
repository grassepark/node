//server.js
// Import necessary modules
const express = require('express');
const path = require('path');
const owoify = require('owoify-js').default;

// Create an instance of an express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the port the application will be running on
const port = process.env.port || 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests
app.post('/owoify', (req, res) => {
  const { inputText, option } = req.body;

  //thank you chatGPT
  if (!inputText) {
    return res.status(400).json({ error: 'Text input is required.' });
  }

  let owoifiedText;

  if (option === 'uwu' || option === 'owo' || option === 'uvu') {
    owoifiedText = owoify(inputText, option);
  } else {
    owoifiedText = owoify(inputText); // Default to 'uwu' if option is invalid
  }

  res.json({ owoifiedText });
});

// Set the application to listen on a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
