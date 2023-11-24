const route = (pathname, handle, response, productId) => {
  if (typeof handle[pathname] === 'function') {
    typeof handle[pathname](response, productId)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.write('Not Found')
    response.end();
  }
}

exports.route = route;
