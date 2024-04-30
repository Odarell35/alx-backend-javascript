// recreate the small HTTP server using Express:
const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    const databasePath = 'database.csv';

    countStudents(databasePath)
        .then(() => {
            console.log('Counting students completed successfully.');
            res.send('This is the list of our students (with database):\n');
        })
        .catch(error => {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        });
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

