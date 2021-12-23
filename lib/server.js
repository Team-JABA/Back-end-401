'use strict'

const express = require('express');
const app = express();
const modelRoutes = require('./routes/modelRoutes')
const crimeApiRoute = require('./routes/crimeApi')
app.use(express.json())
app.use(crimeApiRoute)
app.use(modelRoutes)

module.exports = {
  app,
  start: (port) => {
    app.listen(port, ()=> console.log(`listening on ${port}`))
  }
}