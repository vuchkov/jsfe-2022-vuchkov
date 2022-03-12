import {Form} from "react-bootstrap";
import {useMovie} from "../movies/MovieContext";

function Genres(props) {

    const {checkedState, setCheckedState} = useMovie();

    function handleChange(index) {
        //TODO check if we should directly modify the state and then write it
        checkedState[index] = !checkedState[index]
        setCheckedState(checkedState);
    }

    function getCheckboxes() {
        return props.checkboxes.map((checkbox, index) => {
            return <Form.Group 
                    key={checkbox.value}
                    controlId={`checkbox-${checkbox.id}`}>
                        <Form.Check
                            value={checkedState[index]}
                            onChange={() => handleChange(index)} 
                            type="checkbox" 
                            label={checkbox.label} />
            </Form.Group>
        })
    }


    return (
        <Form.Group 
            className="mb-3" 
            controlId="filterForm.ControlCheckboxes">
            <Form.Label>Избери Жанр</Form.Label>
            {getCheckboxes()}
        </Form.Group>
    )
}
export default Genres;