'use strict'
const express = require('express');
const addressRouter = express.Router();
require('dotenv').config();
const axios = require('axios');
const { add } = require('nodemon/lib/rules');

addressRouter.get('/api/address', async (req, res) => {
  console.log('hitting route')
  try{
    let address = req.query.address
    let convertedAddress= address.replace(/%20/g, " ");
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${convertedAddress}&key=${process.env.MAP_API_KEY}`)
    console.log(response.data.results[0].geometry.location)
    res.status(200).send(response.data.results[0].geometry.location)
    //res.status(200)

  }
  catch(err){
    console.log(err, "<-----------this is the error")
    res.status(400).send(err)
  }
})

module.exports = addressRouter