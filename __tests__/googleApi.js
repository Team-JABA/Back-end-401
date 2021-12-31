'use strict'

const supertest = require('supertest')
const app = require('../lib/server.js');
const request = supertest(app.app);

describe('Testing our GoogleApi', () => {

    it('Should be able to get a lat/lon using Get /api/address', async () => {
    const response = await request.get(`/api/address?address=5015 Del Pueblo Ave Las Vegas, NV 89141`)
    expect(response.body).toEqual({"lat": 35.996382, "lng": -115.2095263});

  })
})