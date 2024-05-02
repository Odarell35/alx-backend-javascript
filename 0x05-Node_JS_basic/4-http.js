// create a small HTTP server using the http module:
const http = require('http');
const hostname = '127.0.0.1';
const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, hostname);

module.exports = app;
