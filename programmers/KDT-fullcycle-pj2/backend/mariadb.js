// mysql 모듈 소환
const mariadb = require("mysql2");

// DB와 연결 통로 생성
const connection = mariadb.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "root",
  database: "book_store",
  dateStrings: true,
});

module.exports = connection;
