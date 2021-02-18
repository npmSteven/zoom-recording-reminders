const { zoomVerificationToken } = require('../config');

module.exports.validateZoomNotification = (req, res, next) => {
  if (!req.body.event || !req.headers.authorization) return res.sendStatus(401);
  if (req.headers.authorization !== zoomVerificationToken) return res.sendStatus(401);
  next();
};
