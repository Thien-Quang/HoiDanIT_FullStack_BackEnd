require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')

// get the client
const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template eng
configViewEngine(app)


// khai báo route

app.use('/', webRouters)


// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'ThienQuang'
});
// execute will internally call prepare and query
connection.execute(
  'SELECT * FROM Users u',

  function (err, results, fields) {
    console.log(">>resullts  = ", results); // results contains rows returned by server
    console.log(">>>>>>>>Fields=", fields); // fields contains extra meta data about results, if available

  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})