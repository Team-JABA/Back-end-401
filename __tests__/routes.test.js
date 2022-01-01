'use strict'

const {db} = require('../lib/model')
const supertest = require('supertest')
const app = require('../lib/server.js');
const request = supertest(app.app);

describe('Testing our REST methods', () => {
  let createdIncidentId;
  let createdUserId;
    it('should be able to create an incident using POST /incident', async () => {
    const response = await request.post('/incident').send({
      userName : "anthony",
      cityKey : "AUS",
      incidentCode : 20191010131,
      incidentDate : "2021-11-01 16:32:42",
      incidentOffense : "Alcohol-related offense",
      incidentOffenseCode : "90D",
      incidentOffenseDescription : "Driving Under the Influence",
      incidentOffenseCrimeAgainst : "society", 
      incidentOffenseAction : "C", 
      incidentSourceOriginalType : "DWI", 
      incidentSourceName: "Austin_Police_Department_Crime_Report", 
      incidentLat: 30.30535921,
      incidentLon: -97.67908217,
      isVerified: true
    });
    createdIncidentId = response.body.id
    expect(response.body.id).toBe(createdIncidentId);
    expect(response.body.userName).toBe("anthony");
    expect(response.body.incidentDate).toBe("2021-11-01T23:32:42.000Z");

  })
  
  it('should be able to get a list of incidents using Get /incident', async () => {
    const response = await request.get('/incident');
    expect(response.status).toBe(200);
  })
  
  it('should be able to get an incident by id using Get /incident:id', async () => {
    const response = await request.get(`/incident/${createdIncidentId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(createdIncidentId);
    expect(response.body.userName).toBe("anthony");
    expect(response.body.incidentDate).toBe("2021-11-01T23:32:42.000Z");
  })

  it('should be able to update an incident by id using Put /incident', async () => {
    const response = await (request.put(`/incident/${createdIncidentId}`)).send({
      isVerified: false
    });
    expect(response.status).toBe(200);
    expect(response.body.userName).toBe("anthony");
    expect(response.body.isVerified).toBe(false);
  })

  it('should be able to delete an incident by id using Delete /incident', async () => {
    const response = await (request.delete(`/incident/${createdIncidentId}`));
    expect(response.status).toBe(204);
  })
  
  it('should be able to create a user using POST /uder', async () => {
    const response = await request.post('/user').send({
      userId : "anthony",
      homeCityKey : "lat/lon",

    });
    createdUserId = response.body.id
    expect(response.body.userId).toBe("anthony");
    expect(response.body.homeCityKey).toBe("lat/lon");

  })
  
  it('should be able to get a list of users using Get /user', async () => {
    const response = await request.get('/user');
    expect(response.status).toBe(200);
  })
  
  it('should be able to get a user by id using Get /user:id', async () => {
    const response = await request.get(`/user/${createdUserId}`);
    expect(response.status).toBe(200);
    expect(response.body.userId).toBe("anthony");
  })


  it('should be able to update an incident by id using Put /user', async () => {
    const response = await (request.put(`/user/${createdUserId}`)).send({
      homeCityKey : "lat/long",
    });
    console.log(response)
    expect(response.status).toBe(200);
    expect(response.body.homeCityKey).toBe("lat/long");
  })

  it('should be able to delete an incident by id using Delete /user', async () => {
    const response = await (request.delete(`/user/${createdUserId}`));
    expect(response.status).toBe(204);
  })
})

