'use strict'

const User = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'user',{
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      homeCityKey: {
        type: DataTypes.STRING,
        allowNull: true
      },

    })

module.exports = User