'use strict'
const express = require('express');
const crimeRouter = express.Router();
require('dotenv').config();
const axios = require('axios');
const testData = require('../testData');
const savetoDb = require('../middleware/saveToDb')

//Crime API does not work due to no more API requests allowed on API Key. Need new API key.

crimeRouter.get('/api/ping', async (req, res) => {
  try{
    res.status(200).send('pong')

  }
  catch(err){
    res.status(400).send(err)
  }
})

crimeRouter.get('/api/crime', async (req, res) => {
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
    let saveData = response.data.incidents
    savetoDb(saveData)
    res.status(200).send(response.data.incidents)

  }
  catch(err){
    res.status(400).send(err)
  }
})

module.exports = crimeRouter