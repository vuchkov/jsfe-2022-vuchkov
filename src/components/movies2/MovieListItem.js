function MovieListItem({movie}) {

    function getPoster() {
        return `${movie.Poster}`;
    }

    return (
        <>
            <div className="d-flex py-1">
                <img className="movie2-poster" src={getPoster()} alt={movie.Title}/>
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold movie-title">{movie.Title}</div>
                            <div className="movie-release-date">
                                <p>Year: {movie.Year}</p>
                            </div>
                        </div>
                    </div>
                    <div className="movie2-overview pt-3">
                        <p>Type: <span className="capitalize">{movie.Type}</span><br />
                        IMDB: {movie.imdbID}</p>
                    </div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}
export default MovieListItem;