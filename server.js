const express = require('express');

const { port } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/notification/meeting', (req, res) => {
  const { method, path, status } = req.body;
  console.log('body', req.body);
  console.log('headers', req.headers);
  console.log(`
    Method: ${method}
    Path: ${path}
    Method: ${status}
    Authorization: ${req.headers.authorization}
  `);
});

app.listen(port, () => console.log(`Listening on PORT: ${port}`));
