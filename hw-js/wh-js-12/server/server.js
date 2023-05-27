const http = require('http');
const personalModule = require('../personalmodule/personalmodule');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Date of request: ${new Date()}\n`);
  res.write(personalModule.getGreetingMessage('oivaniu'));
  res.end();
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});