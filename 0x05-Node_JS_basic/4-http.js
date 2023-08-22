const app = require('http');

const port = 1245;
const host = '127.0.0.1';

const server = app.createServer((req, res) => {
  res.statusCode = (200);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, host, () => {
  console.log('...');
});

module.exports = app;
