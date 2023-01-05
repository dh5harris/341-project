const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Kristy Harris');
});

module.exports = routes;
