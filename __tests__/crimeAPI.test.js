'use strict'

const app = require('../lib/server.js');
const supertest = require('supertest')
const request = supertest(app.app);


describe('Testing our Crime API route', () => {
  it('should be able to get a list of incidents from the crime API route', async () => {
  const response = await request.get('/api/crime')

  expect(response.status).toBe(200)
});

});

