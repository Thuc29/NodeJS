require('dotenv').config()
const express = require('express')
const path = require('path')

const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web');
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({ extended: true}))
//config template engine
configViewEngine(app);

//config router
app.use('/', webRouter);

//simple query
// connection.query('SELECT * FROM Users', (error, results, fields) => {
//   if (error) throw error
//   console.log(">> result", results)
// })


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})   