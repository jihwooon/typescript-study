import http from 'node:http';

const onRequest = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end();
}

http.createServer(onRequest).listen(8080, () => {
  console.log('server running...')
})
