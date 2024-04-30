//Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const { countStudents } = require('./3-read_file_async'); // Importing the countStudents function

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const databasePath = 'database.csv';

    if (req.url === '/') {
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        countStudents(databasePath)
            .then(() => {
                console.log('Counting students completed successfully.');
                res.end('This is the list of our students (with database):\n');
            })
            .catch(error => {
                console.error(error.message);
                res.statusCode = 500;
                res.end('Internal Server Error');
            });
    } else {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

