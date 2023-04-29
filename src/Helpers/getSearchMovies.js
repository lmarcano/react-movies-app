
//funcion para buscar peliculas por un search key
export const getSearchMovies = async(url) => {    
    
    try {
        const resp = await fetch(url);
        const {results} = await resp.json();

        const movies = results.map(movie => ({
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview
        }));

        return movies;
    } catch (error) {
        console.log(error);
    }    

}