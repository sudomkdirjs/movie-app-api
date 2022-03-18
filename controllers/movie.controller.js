const methods = require('../helpers/methods');

const axios = require('axios');

const { OMDB_API_URL } = require('../helpers/config');

const { movieDB } = require('../data');

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
 exports.searchMovies = async (req, res) => {

    const { s: searchValue = '', page = 1 } = req.query;

    try {
        const response = await axios(
            `${OMDB_API_URL}&type=movie&s=${searchValue}&page=${page}`
        );

        const localMovies = movieDB.searchMovies(searchValue);

        if ((!response.data || response.data.Response === 'False') && localMovies.length === 0) {
            return res.status(404).send(methods.failResponse('No movies found for the given search input'));
        }

        res.send(
            methods.successResponse(
                'Success',
                getMoviesListPayload(response.data, localMovies)
            )
        );
    } catch(error) {
        console.log(error);
        res.status(404).send(methods.failResponse('No movies found for the given search input'));
    } 
}

const getMoviesListPayload = (data = {}, localMovies = []) => {

    let omdbMovies = data.Search || [];
    let movies = [...localMovies, ...omdbMovies];

    movies.sort((a, b) => Number(b.Year) - Number(a.Year));

    return {
        movies,
        totalResults: (Number(data.totalResults) || 0) + localMovies.length
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
 exports.getMovieDetails = async (req, res) => {

    const { movieID = '' } = req.params;

    try {
        let response = await axios(
            `${OMDB_API_URL}&type=movie&i=${movieID}`
        );
        if (!response.data || response.data.Response === 'False') {
            const movie = movieDB.getMovie(movieID);
            if (!movie) {
                return res.status(404).send(methods.failResponse('Movie Not Found'));
            }
            response = { data: movie };
        }
        return res.send(
            methods.successResponse(
                'Success',
                response.data
            )
        );
    } catch(error) {
        console.log(error);
        res.status(404).send(methods.failResponse('Movie Not Found'));
    } 
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createMovie = async (req, res) => {

    try {
        const movie = { ...req.body, imdbID: methods.uid() };
        const imdbID = movieDB.addMovie(movie);

        res.send(
            methods.successResponse(
                'Success',
                { imdbID }
            )
        );
    } catch(error) {
        console.log(error);
        res.status(400).send(methods.failResponse('Bad Request'));
    }
}
