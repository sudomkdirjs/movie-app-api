const methods = require('../helpers/methods');

const axios = require('axios');

const { OMDB_API_URL } = require('../helpers/config');

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
        if (!response.data || response.data.Response === 'False') {
            res.status(404).send(methods.failResponse('No movies found for the given search input'));
        } else {
            res.send(
                methods.successResponse(
                    'Success',
                    getMoviesListPayload(response.data)
                )
            );
        }
    } catch(error) {
        console.log(error);
        res.status(404).send(methods.failResponse('No movies found for the given search input'));
    } 
}

const getMoviesListPayload = (data) => {

    data.Search.sort((a, b) => Number(b.Year) - Number(a.Year));

    return {
        movies: data.Search,
        totalResults: Number(data.totalResults)
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
        const response = await axios(
            `${OMDB_API_URL}&type=movie&i=${movieID}`
        );
        if (!response.data || response.data.Response === 'False') {
            res.status(404).send(methods.failResponse('Movie Not Found'));
        } else {
            res.send(
                methods.successResponse(
                    'Success',
                    response.data
                )
            );
        }
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
    res.send(
        methods.successResponse(
            'Express JS API Boiler Plate post api working like a charm...',
            {
                data: 'here comes you payload...',
                request: req.body
            }
        )
    );
}
