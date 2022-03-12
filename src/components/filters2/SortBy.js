import {Form} from "react-bootstrap";
import {useMovie} from "../movies/MovieContext";

function SortBy(props) {
    const {selectedSortBy, setSelectedSortBy} = useMovie();
    const options = [
        {
            value: "popularity.desc",
            title: "Най-популярни",
        },
        {
            value: "vote_average.desc",
            title: "С най-висок рейтинг",
        },
        {
            value: "release_date.desc",
            title: "Най-скорошни",
        },
    ]

    function getOptions() {
        return options.map(option => {
            return <option 
                    key={option.value}
                    value={option.value}>
                {option.title}
            </option>
        })
    }

    return (
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlSelect1">
            <Form.Label>Подреди по</Form.Label>
            <Form.Select
                value={selectedSortBy}
                onChange={e => setSelectedSortBy(e.target.value)}>
                {getOptions()}
            </Form.Select>
        </Form.Group>
    )
}
export default SortBy;