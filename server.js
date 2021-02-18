const express = require('express');

const { port } = require('./config');
const { validateZoomNotification } = require('./middleware/validateZoomNotification');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/notifications/meeting', validateZoomNotification, (req, res) => {
  const { event, payload } = req.body;
  console.log('event', event);
  console.log('payload', payload);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Listening on PORT: ${port}`));
