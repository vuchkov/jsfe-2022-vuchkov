import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteMovie, removeFavoriteMovie } from "../../redux/actions";

function FavoriteButton({movie}) {

    const dispatch = useDispatch();
    const favoriteMovies = useSelector(state => state.favoriteMovies);
    
    function isInFavorites() {
        return favoriteMovies.some(favMovie => {
            return favMovie.id === movie.id
        });
    }

    function toggleFavorite() {
       
        if(isInFavorites()){
            dispatch(removeFavoriteMovie(movie));
            return;
        }

        dispatch(addFavoriteMovie(movie));
    }

    return (
        <>
            <FontAwesomeIcon
                className={
                    `favorite-icon ms-2 ${isInFavorites() ? 'active' : ''}`
                }
                size="lg"
                onClick={() => toggleFavorite()} 
                icon={faStar} />
        </>
    )
}
export default FavoriteButton;