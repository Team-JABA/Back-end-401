'use strict'

const {db} = require('../lib/model')
const supertest = require('supertest')
const app = require('../lib/server.js');
const request = supertest(app.app);


beforeAll(async () => { 
  await db.sync(); // creates tables if they haven't been created yet
});

afterAll(async () => { 
  await db.drop(); // drops all table rows within our database instance
});

describe('Testing our REST methods', () => {
    it('should be able to create an incident using POST /incident', async () => {
    const response = await request.post('/incident').send({
      user : "anthony",
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

    const response2 = await request.post('/incident').send({
      user : "matt",
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
      isVerified: false
    });

    expect(response.body.id).toBe(1);
    expect(response.body.user).toBe("anthony");
    expect(response.body.incidentDate).toBe("2021-11-01T23:32:42.000Z");
    expect(response2.body.id).toBe(2);
    expect(response2.body.user).toBe("matt");
    expect(response2.body.isVerified).toBe(false);
  })

  
  it('should be able to get an incident by id using Get /incident', async () => {
    const response = await request.get('/incident');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  })
  
  it('should be able to get an incident by id using Get /incident:id', async () => {
    const response = await request.get('/incident/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
    expect(response.body.user).toBe("anthony");
    expect(response.body.incidentDate).toBe("2021-11-01T23:32:42.000Z");
  })

  it('should be able to update an incident by id using Put /incident', async () => {
    const response = await (request.put('/incident/1')).send({
      isVerified: false
    });
    expect(response.status).toBe(200);
    expect(response.body.user).toBe("anthony");
    expect(response.body.isVerified).toBe(false);
  })

  it('should be able to delete an incident by id using Delete /incident', async () => {
    const response = await (request.delete('/incident/2'));
    const response2 = await request.get('/incident');
    expect(response.status).toBe(204);
    expect(response2.status).toBe(200);
    expect(response2.body.length).toBe(1);
  })
  

})

