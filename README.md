### 401 Back-end


# How to make a mock raw data call
GEThttps://private-anon-644bdcb09a-crimeometer.apiary-mock.com/v1/incidents/raw-data?lat=lat&lon=lon&distance=distance&datetime_ini=datetime_ini&datetime_end=datetime_end&page=pageParameters
lat
latitude, format +/-XX.YYYY
String
lon
longitude, format +/-XXX.YYYY
String
distance
radio around lat and long coordinates to filter reports, in Miles, Yards, Feet, Kilometers or Meters. Example: 10mi, 10yd, 10ft, 10km, 10m respectively.
String
datetime_ini
Initial date/time (format yyyy-MM-dd'T'HH: mm: ss.SSS'Z)
Datetime
datetime_end
End date/time (format yyyy-MM-dd'T'HH: mm: ss.SSS'Z)
Datetime
page
(default '1'), if the user set this parameter the API will return the next 100 incidents ordered by incident_date desc (if any). For example, if set to '2', it will return reports 101 to 200 (if any).
Int
Request

# Test route

http://localhost:3000/api/crime?lat=$35.9965&lon=-115.2096&datetime_ini=2021-11-01T15:53:00.000Z'&datetime_end=2021-11-05T15:53:00.000Z&distance=10mi&page=1

35.9965, -115.2096

API key

https://private-anon-644bdcb09a-crimeometer.apiary-mock.com/v1/incidents/raw-data?lat={lat}&lon={lon}&distance={distance}&datetime_ini={datetime_ini}&datetime_end={datetime_end}&page={page}',

# Testing
{
    "user" : "anthony",
    "cityKey" : "AUS",
    "incidentCode" : "20191010131",
    "incidentDate" : "2021-11-01 16:32:42",
    "incidentOffense" : "Alcohol-related offense",
    "incidentOffenseCode" : "90D",
    "incidentOffenseDescription" : "Driving Under the Influence",
    "incidentOffenseCrimeAgainst" : "society", 
    "incidentOffenseAction" : "C", 
    "incidentSourceOriginalType" : "DWI", 
    "incidentSourceName": "Austin_Police_Department_Crime_Report", 
    "incidentLat": "30.30535921",
    "incidentLon": "-97.67908217",
    "isVerified": "true"
}

# Heroku Address
Main Url : https://isnitch-team-jaba.herokuapp.com/
Ping : https://isnitch-team-jaba.herokuapp.com/api/ping