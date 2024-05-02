//Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      
      const lines = data.trim().split('\n').slice(1).filter(Boolean);
      const header = data.trim().split('\n')[0].split(',');
      const idxFn = header.findIndex(ele => ele === 'firstname');
      const idxFd = header.findIndex(ele => ele === 'field');
      
      const fields = {};
      const students = {};
      let numberStudents = 0;

      lines.forEach(line => {
        const [firstname, field] = line.split(',');
        if (!fields[field]) fields[field] = 0;
        fields[field]++;
        students[field] = students[field] ? `${students[field]}, ${firstname}` : firstname;
        numberStudents++;
      });

      const result = {
        numberStudents: `Number of students: ${numberStudents}\n`,
        listStudents: Object.entries(fields).map(([field, count]) => `Number of students in ${field}: ${count}. List: ${students[field]}`)
      };

      resolve(result);
    });
  });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(process.argv[2]);
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      res.write(data.numberStudents);
      res.end(data.listStudents.join('\n'));
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;

