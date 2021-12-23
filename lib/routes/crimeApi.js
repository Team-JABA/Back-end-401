'use strict'
const express = require('express');
const crimeRouter = express.Router();
require('dotenv').config();
const axios = require('axios');

crimeRouter.get('/api/crime', async (req, res) => {
  console.log('hitting route')
  try{
    let lat = req.query.lat
    let lon = req.query.lon
    let datetime_ini = req.query.datetime_ini
    let datetime_end = req.query.datetime_end
    let page = req.query.page
    let distance = req.query.distance

    const response = await axios.get(`
    https://api.crimeometer.com/v1/incidents/raw-data?lat=${lat}&lon=${lon}&distance=${distance}&datetime_ini=${datetime_ini}&datetime_end=${datetime_end}&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.API_KEY}`
      }
    })
    console.log(response)
    console.log(response.data.incidents, "<--------------------this is the response")

    res.status(200).send(response.data[0].incidents)

  }
  catch(err){
    res.status(400).send(err)
  }
})

module.exports = crimeRouter