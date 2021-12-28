'use strict'
const { incident } = require('../model');
const Collection = require('../model/lib/Collection');

const modelMap = {
  incident: new Collection(incident)
};

const saveToDb = async (dataArr) => {
  const model = modelMap.incident
  console.log(dataArr, "<------------- data array")
  let save = dataArr.map((incident) => model.create({
      userName : 'crimeometer',
      cityKey : incident.city_key,
      incidentCode : incident.incident_code,
      incidentDate : incident.incident_date,
      incidentOffense : incident.incident_offense,
      incidentOffenseCode : incident.incident_offense_code,
      incidentOffenseDescription : incident.incident_offense_description,
      incidentOffenseCrimeAgainst : incident.incident_offense_crime_against, 
      incidentOffenseAction : incident.incident_offense_action, 
      incidentSourceOriginalType : incident.incident_source_original_type, 
      incidentSourceName: incident.incident_source_name, 
      incidentLat: incident.incident_latitude,
      incidentLon: incident.incident_longitude,
      isVerified: true
  }) )
  const saved = await Promise.all(save)
  console.log('saved to db')
  return saved
}
module.exports = saveToDb