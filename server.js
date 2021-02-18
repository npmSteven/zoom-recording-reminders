const express = require('express');

const { port } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/notifications/meeting', (req, res) => {
  console.log(req.body);
  // if (req.body.event) return res.sendStatus(401);
  // const { event, payload } = req.body;
  // console.log('event', event);
  // console.log('payload', payload);
  // switch (event) {
  //   case 'meeting.created': {

  //   }
  // }
  // res.sendStatus(200);
});

app.listen(port, () => console.log(`Listening on PORT: ${port}`));
