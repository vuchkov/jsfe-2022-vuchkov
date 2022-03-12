function MovieGridItem({movie}) {

    function getPoster() {
        return `${movie.Poster}`;
    }
    return (
        <>
            <div className="col-md-4">
                <div className="grid-movie-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="movie-poster w-50" 
                        src={getPoster()} alt={movie.title}/>
                        <div className="px-2">
                            <div className="fw-bold movie-title py-1">{movie.Title}</div>
                            <div className="movie-release-date">{movie.Year}</div>
                            <div className="movie-release-date">{movie.imdbID}</div>
                            <div className="movie-release-date">{movie.Type}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieGridItem;