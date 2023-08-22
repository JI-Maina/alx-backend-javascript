const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = (200);
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(db)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245, 'localhost', () => {
  console.log('...');
});

module.exports = app;
