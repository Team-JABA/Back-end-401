'use strict'
const express = require('express')
const router = express.Router();
const axios = require('axios')


router.get('/api/ping', async (req, res) => {
  console.log(req.body)
  try{
    const response = 'pong'
    res.status(200).send(response)
  }
  catch(err){
    res.status(400).send(err)
  }
})

router.get('/api/crime', async (req, res) => {
  console.log('hitting route')
  try{
    console.log(req.query)
    let lat = req.query.lat
    let lon = req.query.lon
    let initialDateTime = req.query.datetime_ini
    let endDateTime = req.query.datetime_end
    let page = req.query.page
    let dist = req.query.distance

    const response = await axios.get(`
    https://private-anon-644bdcb09a-crimeometer.apiary-mock.com/v1/incidents/raw-data?lat=${lat}&lon=${lon}&distance=${distance}&datetime_ini=${datetime_ini}&datetime_end=${datetime_end}&page=${page}`)

    res.status(200).send(response)

  }
  catch(err){
    res.status(400).send(err)
  }
})

module.exports = router