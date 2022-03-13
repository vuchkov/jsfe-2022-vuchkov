import {Form} from "react-bootstrap";
import {useMovie} from "../movies2/MovieContext";

function FilterByYear(props) {

    const {byYear, setByYear} = useMovie();

    return (
        <Form.Group
        className="mb-3" 
        controlId="filterForm.ControlYear1">
        <Form.Label>Въведете година</Form.Label>
        <div className="d-flex align-items-center">
            <Form.Control 
                className="form-control"
                type="text"
                value={byYear} 
                onChange={e => setByYear(e.target.value)} />
        </div>
        </Form.Group>
    )
}
export default FilterByYear;