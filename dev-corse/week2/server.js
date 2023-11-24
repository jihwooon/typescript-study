let http = require('http')

const start = (route, handle) => {
  const onRequest = (request, response) => { 
    const baseURL = 'http://' + request.headers.host + '/';
    const pathname = new URL(request.url, baseURL).pathname;
    
    route(pathname, handle, response)
  }

  http.createServer(onRequest).listen(8081);
}

exports.start = start
