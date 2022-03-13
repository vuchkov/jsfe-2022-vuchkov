function MovieGridItem({movie}) {

    function getPoster() {
        return `${movie.Poster}`;
    }
    return (
        <>
            <div className="col-md-3">
                <div className="grid-movie-container img-thumbnail mb-3">
                    <img className="movie2-poster" 
                    src={getPoster()} alt={movie.title}/>
                    <div className="movie2-overview pt-3">
                        <div className="fw-bold movie-title py-1">{movie.Title}</div>
                        <div className="movie-release-date"></div>
                        <p>
                            type: <span className="capitalize">{movie.Type}</span><br />
                            year: {movie.Year}<br />
                            IMDB: {movie.imdbID}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieGridItem;