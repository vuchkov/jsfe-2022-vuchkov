import React from "react";
import Form from "react-bootstrap/Form";

class NameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return <div className="p-3 rounded border">
            {this.props.name}
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Enter email" />
                </Form.Group>
            </Form>
        </div>
    }
}
export default NameComponent;