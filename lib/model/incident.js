'use strict'

const Incident = (sequelize, datatypes) => {
  const model = sequelize.define(
    'incident',
    {
      user: {
        type: datatypes.STRING,
        allowNull: false
      },
      cityKey: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentCode: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentDate: {
        type: datatypes.DATE(6),
        allowNull: false
      },
      incidentOffense: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentOffenseCode: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentOffenseDescription: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentOffenseCrimeAgainst: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentOffenseAction: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentSourceOriginalType: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentSourceName: {
        type: datatypes.STRING,
        allowNull: true
      },
      incidentLat: {
        type: datatypes.DOUBLE(6,4),
        allowNull: false
      },
      incidentLon: {
        type: datatypes.DOUBLE(7,4),
        allowNull: false
      },
      isVerified: {
        type: datatypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }

    }
  )
}

module.exports = Incident