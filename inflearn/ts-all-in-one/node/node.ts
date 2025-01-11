import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path'

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (error, data) => {
    res.writeHead(200);
    res.end(data)
  })
}).listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

