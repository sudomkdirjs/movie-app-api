const express = require('express');

const router = express.Router();

const MovieController = require('../controllers/movie.controller');
const { validate } = require('../middlewares/validators/wrapper.validator');
const {
    indexValidator
} = require('../middlewares/validators/index.validations');

router.get('/', MovieController.searchMovies);

router.get('/:movieID', MovieController.getMovieDetails);

router.post('/', validate(indexValidator), MovieController.createMovie);

module.exports = router;
