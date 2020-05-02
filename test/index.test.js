const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

it('Probando endpoint /is async', async done => {
    const res = await request.get('/isi');
    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe('===> Ingeniería de software!');
    done();
});