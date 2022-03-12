import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {useMovie} from "../movies/MovieContext";

import "react-datepicker/dist/react-datepicker.css";

function FilterByDate(props) {

    const {startDate, setStartDate, endDate, setEndDate} = useMovie();

    return (
        <Form.Group 
        className="mb-3" 
        controlId="filterForm.ControlDate1">
        <Form.Label>Избери година</Form.Label>
        <div className="d-flex align-items-center">
            <span>от </span>
            <DatePicker 
                wrapperClassName="w-75 ms-auto"
                className="form-control"
                selected={startDate} 
                onChange={(date) => setStartDate(date)} />
        </div>
        <div className="d-flex align-items-center mt-1">
            <span>до </span>
            <DatePicker 
                wrapperClassName="w-75 ms-auto"
                className="form-control"
                selected={endDate} 
                onChange={(date) => setEndDate(date)} />
        </div>
    </Form.Group>
    )
}
export default FilterByDate;