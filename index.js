// Copyright 2020 Google, LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Hello world received a request.');  
  res.send(`Hola Mundo`);
});

app.get('/suertudo', (req, res) => {
  console.log('Generando un número aleatorio');
  res.send('Numero al azar');

});

app.get('/isoftware', (req, res) => {
  console.log('Hola desde Ingeniería de software I');
  res.send('=========> ISI Rocks!');    
});

app.get('/tads', async (req, res) => {
  res.status(200).send({
    status: true,
    mensaje: `hola desde TADS`
  });  
  console.log('Hola desde TADS endpoint activate');
      
});

app.get('/random', function(req, res) {
	var col = ['red','green','blue']
    var num = Math.floor(Math.random() * 3);
    var s= '<body bgcolor= "'+col[num]+'">';
    res.send(s+'<h1>My lucky number =  ' + num+'</h1>');
});
app.get('/unab', (req, res) => {
  console.log('Hola UNAB');
  res.send('=========> Hola Ingenieria de Software UNAB!');
  res.send('=========> ISI Rocks twice!');
});
app.get('/callback', (req, res) => {
  console.log('Aquí colocaremos un callback');
  res.send('=========> ISI callback');
  res.send('=========> ISI Rocks twice!');
});
module.exports = app