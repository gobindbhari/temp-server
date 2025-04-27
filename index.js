// Import express
const express = require('express');

// Create an express app
const app = express();
const PORT = 8000

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('now CI/CD works hey i am here');
});
app.get('/hello', (req, res) => {
  res.send('Hello, this is a temporary Express server! \n from hello route');
});

// Set the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
