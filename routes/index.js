const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Kristy Harris');
});
routes.get('/test', (req, res) => {
  res.send('Daniel Harris');
});

module.exports = routes;
