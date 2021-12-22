'use strict'
const {Sequelize, DataTypes} = require('sequelize')
const incidentModel = require('./incident.js')

let DATABASE_URL = 'sqlite::memory'

const sequelizeInstance = new Sequelize(DATABASE_URL, DataTypes);
const incidentTable = incidentModel(sequelizeInstance, DataTypes);


module.exports = {
  db: sequelizeInstance,
  incident: incidentTable
}