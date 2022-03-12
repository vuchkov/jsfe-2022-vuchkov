import {Form} from "react-bootstrap";
import {useMovie} from "../movies2/MovieContext";

function FilterByYear(props) {

    const {byYear} = useMovie();

    return (
        <Form.Group
        className="mb-3" 
        controlId="filterForm.ControlYear1">
        <Form.Label>Въведете година</Form.Label>
        <div className="d-flex align-items-center">
            <Form.Control 
                wrapperClassName="w-75 ms-auto"
                className="form-control"
                type="text" />
        </div>
        </Form.Group>
    )
}
export default FilterByYear;