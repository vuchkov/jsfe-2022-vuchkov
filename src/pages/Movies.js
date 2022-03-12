import MovieList from "../components/movies/MovieList";
import Filters from "../components/filters/Filters";
import {Col} from "react-bootstrap";
import {MovieProvider} from "../components/movies/MovieContext";

function Movies(props) {
    return (
        <MovieProvider>
            <Col md={3} >
                <Filters/>
            </Col>
            <Col>
                <MovieList/>
            </Col>
        </MovieProvider>
    )
}
export default Movies;