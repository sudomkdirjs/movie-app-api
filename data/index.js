  
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
        this.SIZE = 10;
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

    searchMovies = function(searchValue = '', page = 1) {
        page = Number(page);
        let movies = [];

        searchValue = searchValue.trim().toLowerCase();

        if ( searchValue === '') return [];

        for(let i=0; i<this.MOVIES.length; i++) {
            const key = 'Title';
            const title = this.MOVIES[i][key].toLowerCase();
            if(title.indexOf(searchValue) !=-1 ) {
                const movie = this.MOVIES[i];
                const _movie = {
                    Poster: movie.Poster,
                    Title: movie.Title,
                    Type: movie.Type,
                    Year: movie.Year,
                    imdbID: movie.imdbID
                }
                movies.push(_movie);
            }
        }
        return movies.slice((page - 1) * this.SIZE, page * this.SIZE);
      }
    
}

exports.movieDB = new MovieDB();