const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


describe('Probanod endpoints', () => {
    it('Probando endpoint /unab async', async done => {
        const res = await request.get('/unab');
        expect(res.statusCode).toBe(200);
        expect(res.body.mensaje).toBe('===> Ingeniería de software!');
        done();
    });
    it('Probando endpoint /tads', async done => {
        const res = await request.get('/tads');
        expect(res.statusCode).toBe(200);        
        expect(res.body.mensaje).toBe('Devops TADS 2021');  
        done();      
    });
})