'use strict'

const express = require('express');
const {Incidents} = require('../model')
const incidentRouter = express.Router();

incidentRouter.post('/incidents', async (req, res) => {
  console.log(req.body)
  const incidentInfo = req.body
  const newIncident = await Incidents.create({
    user,
    cityKey,
    incidentCode,
    incidentDate,
    incidentOffense,
    incidentOffenseCode,
    incidentOffenseDescription,
    incidentOffenseCrimeAgainst,
    incidentOffenseAction,
    incidentSourceOriginalType,
    incidentSourceName,
    incidentLat,
    incidentLon,
    isVerified
    
  })
  res.status(200).send('well hello there sailor')
})

module.exports = incidentRouter;