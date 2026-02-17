 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)

    const dateHours = today.getDate().getHours();
    let greeting = "Still not morning!";

    if(dateHours >= 6 && dateHours <= 12) {
        greeting = "Good Morning!";
    } else if ( dateHours > 12 && dateHours <= 18 ) {
        greeting = "Good Afternoon!";
    } else if ( dateHours > 18 && dateHours <= 21 ) {
        greeting = "Good Evening!"
    } else if ( dateHours > 21 && dateHours <= 24 ) {
        greeting = "Good Night!"
    }

    // Send the response with the current date from the 'today' module
    res.end(`Hello, World!  ${greeting} -- ${today.getDate().toISOString()}, ${dateHours} hours`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
