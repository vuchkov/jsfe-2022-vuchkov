import { Card, Form, Button } from "react-bootstrap";
import SortBy from "./SortBy";
import FilterByDate from "./FilterByDate";
import Genres from "./Genres";
import {useMovie} from "../movies/MovieContext";
import {useEffect} from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions";

const checkboxes = [
    {
        value: 28,
        label: "Екшън",
        id: "action",
    },
    {
        value: 35,
        label: "Комедия",
        id: "comedy",
    },
    {
        value: 12,
        label: "Приключенски",
        id: "adventure",
    },
    {
        value: 80,
        label: "Криминален",
        id: "criminal",
    },
]


function Filters(props) {
    
    const dispatch = useDispatch();

    const {
        selectedSortBy,
        startDate,
        endDate,
        checkedState,
    } = useMovie();

    useEffect(() => {
        fetchMovies();
    }, []);

    function filtersOnSubmit(e) {
        e.preventDefault();
        fetchMovies();
    }

    function fetchMovies() {
        dispatch(getMovies('discover/movie', {
            "release_date.gte": getDate(startDate),
            "release_date.lte": getDate(endDate),
            "with_genres": getCheckedOptions(),
            "sort_by": selectedSortBy,
        }))
    }

    function getDate(date) {
        return moment(date).format('YYYY-MM-DD');
    }

    function getCheckedOptions() {
        const checkedOptions = checkedState.reduce((acc, curr, index) => {
            if(curr){
                return [...acc, checkboxes[index].value]
            }
            return acc
        }, [])
        return checkedOptions.toString();
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <SortBy/>
                    <FilterByDate/>
                    <Genres checkboxes={checkboxes}/>
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