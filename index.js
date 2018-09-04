const http = require ('http');
const PORT = process.env.PORT || 5000;

//const hostname = '127.0.0.1';
//const port = 3000;

const server = http.createServer ((req, res)=>{
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'text/plain');
    res.end('Hello World !!! SAM-MAN -- PATCH 1\n');
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});
