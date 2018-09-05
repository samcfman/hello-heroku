const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World !!! NEW FEATURE - ADD NEW ICON 1\n');
});

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on ${PORT}/`);
});
