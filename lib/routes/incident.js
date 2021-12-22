'use strict'

const {Incidents} = require('../model')
const express = require('express');
const router = express.Router();

router.post('/incident', async (req, res) => {
  const incidentInfo = req.body
  const newIncident = await Incidents.create({
    
  })
})