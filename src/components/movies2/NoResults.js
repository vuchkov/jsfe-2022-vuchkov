import {Alert} from "react-bootstrap";

function NoResults({title}) {
    return (
        <Alert variant="info" className="p-5 text-center">
            {title}
        </Alert>
    )
}
export default NoResults;