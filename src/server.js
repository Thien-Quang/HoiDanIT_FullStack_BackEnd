require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')
const connection = require('./config/database')
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME


//coonfig req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config template eng
configViewEngine(app)

// khai báo route
app.use('/', webRouters)




// execute will internally call prepare and query
connection.execute(
  'SELECT * FROM Users u',

  function (err, results, fields) {
    console.log(">>resullts  = ", results); // results contains rows returned by server


  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})