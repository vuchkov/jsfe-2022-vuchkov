import { Card, Form, Button } from "react-bootstrap";
import FilterByName from "./FilterByName";
import FilterByYear from "./FilterByYear";
import {useMovie} from "../movies2/MovieContext";
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions2";

function Filters(props) {
    
    const dispatch = useDispatch();

    const {
        byName,
        byYear,
    } = useMovie();

    function fetchMovies() {
        dispatch(getMovies('', {
            "s": byName,
            "y": byYear,
        }))
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    function filtersOnSubmit(e) {
        e.preventDefault();
        fetchMovies();
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <FilterByName/>
                    <FilterByYear/>
                    <Button 
                        variant="primary" 
                        type="submit">
                        Намери
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Filters;