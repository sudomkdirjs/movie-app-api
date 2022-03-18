exports.PORT = process.env.PORT || 5000;
exports.NODE_ENV = process.env.NODE_ENV || 'development';

OMDB_API_KEY = process.env.OMDB_API_KEY || '44a627e9'; // OMDb API Key
exports.OMDB_API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

exports.VALIDATION_FAIL_CODE = 406;
exports.EXCEPTION_CODE = 400;
