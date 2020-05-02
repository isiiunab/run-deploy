const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

it(' Probando endpoint tads async', async done => {
    const res = await request.get('/tads');
    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe('hola desde TADS');
    done();
});