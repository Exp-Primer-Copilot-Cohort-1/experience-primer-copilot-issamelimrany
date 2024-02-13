// create a web server
// Import express
const express = require('express');

// Create an express application
const app = express();

// Define a port to listen for incoming requests
const PORT = 3000;

// Define a route for GET requests to the root URL '/'
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Make the app listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
