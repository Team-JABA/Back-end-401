'use strict'
const {Sequelize, DataTypes} = require('sequelize');
const incidentModel = require('./incident');
const userModel = require('./user');
require('dotenv').config();
let DATABASE_URL = process.env.DATABASE_URL;
//let DATABASE_URL = 'sqlite::memory:';
const DATABASE_CONFIG = process.env.NODE_ENV === 'production' 
? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
} : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
//const sequelizeInstance = new Sequelize(DATABASE_URL, DataTypes);
const incidentTable = incidentModel(sequelizeInstance, DataTypes);
const userTable = userModel(sequelizeInstance, DataTypes)


module.exports = {
  db: sequelizeInstance,
  incident: incidentTable,
  user: userTable
}