'use strict'

const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoute')
const incidentRoutes = require('./routes/incident')
app.use(express.json())
app.use(incidentRoutes)
app.use(apiRoutes)

module.exports = {
  app,
  start: port => {
    app.listen(port, ()=> console.log(`listening on ${port}`))
  }
}