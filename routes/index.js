const express = require('express');
const healthRoutes = require('./health.route');
const movieRoutes = require('./movie.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: healthRoutes,
  },
  {
    path: '/health',
    route: healthRoutes,
  },
  {
    path: '/movies',
    route: movieRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
