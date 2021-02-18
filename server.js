const express = require('express');

const { port } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/notification/meeting', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log(`Listening on PORT: ${port}`));
