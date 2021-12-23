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
    const response = await request.post('/incidents').send({
      name: 'Pizza', 
      calories: '900',
      type: 'junkFood',
    });
    expect(response.body.name).toBe('Pizza');
    expect(response.body.calories).toBe('900');
    expect(response.body.type).toBe('junkFood');
  })


})

