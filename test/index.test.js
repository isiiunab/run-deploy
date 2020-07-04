const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


describe('Probanod endpoints', () => {
    it('Probando endpoint /isi async', async done => {
        const res = await request.get('/isi');
        expect(res.statusCode).toBe(200);
        expect(res.body.mensaje).toBe('===> Ingeniería de software!');
        done();
    });
    it('Probando endpoint /echo', async done => {
        const res = await request.get('/echo');
        expect(res.statusCode).toBe(200);        
        expect(res.body.mensaje).toBe('echo');  
        done();      
    });
    it('Probando endpoint /tads', async done => {
        const res = await request.get('/tads');
        expect(res.statusCode).toBe(200);        
        expect(res.body.mensaje).toBe('Saludo desde TADS!');  
        done();      
    });
})