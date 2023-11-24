const fs = require('fs')
const main_view = fs.readFileSync('./main.html', 'utf-8')

const mariadb = require('./database/connect/mariadb')

const main = (response) => {

  mariadb.query("SELECT * FROM product", (err, rows) => {
    console.log(rows)
  })

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(main_view)
  response.end();
}

const redRacket = (response) => {
  fs.readFile('./img/redRacket.png', (err, data) => {
    
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(data)
    response.end();
  })
}

const blueRacket = (response) => {
  fs.readFile('./img/blueRacket.png', (err, data) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(data)
    response.end();
  })
}

const blackRacket = (response) => {
  fs.readFile('./img/blackRacket.png', (err, data) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(data)
    response.end();
  })
}

let handle = {};
handle['/'] = main;

handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;
