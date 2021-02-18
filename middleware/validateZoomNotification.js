module.exports.validateZoomNotification = (req, res, next) => {
  if (!req.body.event || !req.headers.authorization) return res.sendStatus(401);
  console.log(req.headers.authorization);
  res.sendStatus(200);
}