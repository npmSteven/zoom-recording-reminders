require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  zoomVerificationToken: process.env.ZOOM_VERIFICATION_TOKEN,
};
