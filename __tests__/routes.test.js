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

  // it('should fetch all Foods on GET /api/v1/food', async () => {
  //   const response = await request.get('/api/v1/food');
  //   expect(response.status).toBe(200);
  //   expect(response.body.length).toBe(1);
  // })

  // it('should fetch one Food on GET /api/v1/food:id', async () => {
  //   const response = await request.get('/api/v1/food?id=1');
  //   expect(response.status).toBe(200);
  //   expect(response.body.length).toBe(1);
  // })

  // it('should be able to update a Food', async () => {
  //   const response = await request.put('/api/v1/food/1').send({
  //     name: 'Pizza', 
  //     calories: '1000',
  //     type: 'junkFood',
  //   });

  //   expect(response.body.name).toBe('Pizza');
  //   expect(response.body.calories).toBe('1000');
  //   expect(response.body.type).toBe('junkFood');

  // })

  // it('should delete a record', async () => {
  //   const response = await request.delete('/api/v1/food/1');
  //   expect(response.status).toBe(200)

  // })

})

