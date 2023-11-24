const fs = require('fs')
const main_view = fs.readFileSync('./main.html', 'utf-8')
const orderlist_view = fs.readFileSync('./orderlist.html', 'utf-8');

const mariadb = require('./database/connect/mariadb')

const main = (response) => {

  mariadb.query("SELECT * FROM product", (err, rows) => { })

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

const order = (response, productId) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })

  mariadb.query("INSERT INTO orderlist VALUES (" + productId + ", '" + new Date().toLocaleDateString() + "');", (err, rows) => { })

  response.write('orderPage')
  response.end();
}

const orderList = (response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })

  mariadb.query("SELECT * FROM orderlist", (err, rows) => {
    response.write(orderlist_view);

    rows.map((element) => {
      response.write("<tr>"
        + "<td>" + element.product_id + "</td>"
        + "<td>" + element.order_date + "</td>"
        + "</tr>"
      );
    });

    response.write("</table>")
    response.end();
  })
}

let handle = {};
handle['/'] = main;
handle['/order'] = order;
handle['/orderlist'] = orderList

handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;
