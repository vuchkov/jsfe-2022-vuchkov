import {Form} from "react-bootstrap";
import {useMovie} from "../movies2/MovieContext";

function FilterByName(props) {

    const {byName, setByName} = useMovie();

    return (
        <Form.Group 
        className="mb-3" 
        controlId="filterForm.ControlYear1">
        <Form.Label>Търсене <span className="text-danger">*</span></Form.Label>
        <div className="d-flex align-items-center">
            <Form.Control 
                className="form-control"
                type="text"
                value={byName}
                onChange={e => setByName(e.target.value)}
                required />
        </div>
        </Form.Group>
    )
}
export default FilterByName;