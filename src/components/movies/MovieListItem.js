import moment from "moment";
import constants from "../../constants";
import FavoriteButton from "./FavoriteButton";

function MovieListItem({movie}) {

    function getDate() {
        return moment(movie.releaseDate).format("MMM Do YY"); 
    }

    function getPoster() {
        return `${constants.imageBaseUrl}${movie.poster_path}`;
    }

    return (
        <>
            <div className="d-flex py-1">
                <img className="movie-poster" src={getPoster()} alt={movie.title}/>
                <div className="px-3 flex-grow-1">
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <div className="fw-bold movie-title">{movie.title}</div>
                            <div className="movie-release-date">{getDate()}</div>
                        </div>
                        <span className="movie-vote badge rounded-pill bg-primary ms-auto">
                            {movie.vote_average}
                        </span>
                        <FavoriteButton movie={movie}/>
                    </div>
                    <div className="movie-overview pt-3">
                        {movie.overview}
                    </div>
                </div>
            </div>
            <hr className="my-1"></hr>
        </>
    )
}
export default MovieListItem;