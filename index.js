const express = require('express');
const app = express();

app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.send(`Hola Mundo`);
    console.log('Hello world received a request.');    
});

app.get('/unab', async (req, res) => {
    res.status(200).send({
      status: true,
      mensaje: `===> Ingeniería de software!`
    });  
    console.log('Hola desde TADS endpoint activate');      
});

app.get('/tads', async (req, res) => {
  res.status(200).send({
    status: true,
    mensaje: `Devops TADS 2021`
  });  
  console.log('Hola desde TADS endpoint activate');      
});

module.exports = app