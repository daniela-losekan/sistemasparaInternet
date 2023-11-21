const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, HTTP Server!');
});

const PORT = 3008;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
