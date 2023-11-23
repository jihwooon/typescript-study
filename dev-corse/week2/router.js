const route = (pathname, handle, response) => {
  if (typeof handle[pathname] === 'function') {
    typeof handle[pathname](response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.write('Not Found')
    response.end();
  }
}

exports.route = route;
