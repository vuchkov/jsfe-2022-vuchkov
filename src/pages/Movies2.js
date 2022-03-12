import MovieList from "../components/movies2/MovieList";
import Filters from "../components/filters2/Filters";
import {Col} from "react-bootstrap";
import {MovieProvider} from "../components/movies2/MovieContext";

function Movies2(props) {
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
export default Movies2;