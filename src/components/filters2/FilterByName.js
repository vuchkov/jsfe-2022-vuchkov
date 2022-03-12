import {Form} from "react-bootstrap";
import {useMovie} from "../movies2/MovieContext";

function FilterByName(props) {

    const {byName} = useMovie();

    return (
        <Form.Group 
        className="mb-3" 
        controlId="filterForm.ControlYear1">
        <Form.Label>Търсене</Form.Label>
        <div className="d-flex align-items-center">
            <Form.Control 
                wrapperClassName="w-75 ms-auto"
                className="form-control"
                type="text"
                value={byName} />
        </div>
        </Form.Group>
    )
}
export default FilterByName;