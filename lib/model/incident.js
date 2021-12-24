'use strict'

const Incident = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
    'incident',{
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cityKey: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentCode: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      incidentDate: {
        type: DataTypes.DATE(6),
        allowNull: false
      },
      incidentOffense: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentOffenseCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentOffenseDescription: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentOffenseCrimeAgainst: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentOffenseAction: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentSourceOriginalType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentSourceName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      incidentLat: {
        type: DataTypes.DOUBLE(6,4),
        allowNull: false
      },
      incidentLon: {
        type: DataTypes.DOUBLE(7,4),
        allowNull: false
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }

    })

module.exports = Incident