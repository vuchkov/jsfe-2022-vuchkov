import {Card, Row, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import NoResults from "./NoResults";
import MovieGridItem from "./MovieGridItem";
import {setFavoriteMovies} from "../../redux/actions";

function FavoriteList(props) {
    const dispatch = useDispatch();
    const favoriteMovies = useSelector(state => state.favoriteMovies);
    
    function renderFavoriteMovies() {
        if(!favoriteMovies.length) {
            return <NoResults title={'Нямате добавени любими филми'}/>
        }
        return favoriteMovies.map(movie => {
            return <MovieGridItem key={movie.id} movie={movie}/>
        })
    }

    function clearAllFavorites() {
        dispatch(setFavoriteMovies([]))
    }

    return (
        <Card>
            <Card.Body>
                Favorite list
                <Button 
                    onClick={() => clearAllFavorites()}
                variant="link">Clear all</Button>
                <Row>
                    {renderFavoriteMovies()}
                </Row>
            </Card.Body>
        </Card>
    )
}
export default FavoriteList;