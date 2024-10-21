require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web');

const app = express()
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app);

//config router
app.use('/', webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})   