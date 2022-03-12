import moment from "moment";
import constants from "../../constants";
import FavoriteButton from "./FavoriteButton";

function MovieGridItem({movie}) {

    function getDate() {
        return moment(movie.releaseDate).format("MMM Do YY"); 
    }

    function getPoster() {
        return `${constants.imageBaseUrl}${movie.poster_path}`;
    }
    return (
        <>
            <div className="col-md-4">
                <div className="grid-movie-container img-thumbnail mb-3">
                    <div className="d-flex">
                        <img className="movie-poster w-50" 
                        src={getPoster()} alt={movie.title}/>
                        <div className="px-2">
                            <div className="movie-vote badge rounded-pill bg-primary">
                                {movie.vote_average}
                            </div>
                            <FavoriteButton movie={movie}/>
                            <div className="fw-bold movie-title py-1">{movie.title}</div>
                            <div className="movie-release-date">{getDate()}</div>
                        </div>
                    </div>
                    <div className="movie-overview pt-3">
                        {movie.overview}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieGridItem;