let http = require('http')

const start = (route, handle) => {
  const onRequest = (request, response) => {
    const baseURL = 'http://' + request.headers.host + '/';
    const url = new URL(request.url, baseURL);
    let productId = url.searchParams.get('productId')

    route(url.pathname, handle, response, productId)
  }

  http.createServer(onRequest).listen(8080);
}

exports.start = start
