'use strict'

let testData = [
  {
    "total_incidents": 2,
    "total_pages": 1,
    "incidents": [
      {
        "city_key": "AUS",
        "incident_code": "20191101137",
        "incident_date": "2019-04-20T15:53:00.000Z",
        "incident_offense": "Driving Under the Influence",
        "incident_offense_code": "90D",
        "incident_offense_description": "Driving Under the Influence",
        "incident_offense_detail_description": "Driving Under the Influence at 5309 E RIVERSIDE DR",
        "incident_offense_crime_against": "Society",
        "incident_offense_action": "C",
        "incident_source_original_type": "DWI",
        "incident_source_name": "Austin_Police_Department_Crime_Reports",
        "incident_latitude": 30.2292141,
        "incident_longitude": -97.71322768,
        "incident_address": "5309 E RIVERSIDE DR"
      },
      {
        "city_key": "AUS",
        "incident_code": "20191101207",
        "incident_date": "2019-04-20T16:54:00.000Z",
        "incident_offense": "Assault Offenses",
        "incident_offense_code": "13A",
        "incident_offense_description": "Aggravated Assault",
        "incident_offense_detail_description": "Aggravated Assault at 5809 SWEENEY CIR",
        "incident_offense_crime_against": "Person",
        "incident_offense_action": "C",
        "incident_source_original_type": "AGG ASSAULT FAM/DATE VIOLENCE",
        "incident_source_name": "Austin_Police_Department_Crime_Reports",
        "incident_latitude": 30.30535921,
        "incident_longitude": -97.67908217,
        "incident_address": "5809 SWEENEY CIR"
      }
    ]
  }
]

module.exports = testData;