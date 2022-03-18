  
function compareObjects(o1, o2) {
    let key = 'Title';
    if(o1[key] != o2[key]) return false;
    return true;
}

function itemExists(haystack, needle) {
    for(let i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
    return false;
} 


class MovieDB {
    constructor() {
        this.MOVIES = [];
    }

    getMovies = function() {
        return this.MOVIES;
    }

    getMovie = function(movieID) {
        return this.MOVIES.find(movie => movie.imdbID === movieID);
    }

    addMovie = function(movie) {
        this.MOVIES.push(movie);
        return movie.imdbID;
    }

    searchMovies = function(searchValue = '') {
        let movies = [];
        searchValue = searchValue.trim();

        if ( searchValue === '') return [];

        for(let i=0; i<this.MOVIES.length; i++) {
            let key = 'Title';
            if(this.MOVIES[i][key].indexOf(searchValue) !=-1 ) {
                movies.push(this.MOVIES[i]);
            }
        }
        return movies;
      }
    
}

exports.movieDB = new MovieDB();