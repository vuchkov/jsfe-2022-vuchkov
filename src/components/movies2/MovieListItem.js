function MovieListItem({movie}) {

    function getPoster() {
        return `${movie.Poster}`;
    }

    return (
        <>
            <div className="d-flex py-1">
                <img className="movie-poster" src={getPoster()} alt={movie.Title}/>
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold movie-title">{movie.Title}</div>
                            <div className="movie-release-date">{movie.Year}</div>
                            <div className="movie-release-date">{movie.imdbID}</div>
                            <div className="movie-release-date">{movie.Type}</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}
export default MovieListItem;