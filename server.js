const app = require('./index.js');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
