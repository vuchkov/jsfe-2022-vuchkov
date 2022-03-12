import React from "react";
import {Alert, Button, Badge} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import NameComponent from "./NameComponent";

const names = [
    'Petrov',
    'Ivanov',
    'Georgiev',
]

class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Ivan",
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    handleClick() {
        this.setState({
            name: 'John'
        })
    }

    increment() {
        const count = this.state.count;
        this.setState({
            count: count + 1
        })
    }

    decrement() {
        const count = this.state.count;
        this.setState({
            count: count - 1
        })
    }

    renderNames() {
        // Check Array.map
        // Check arrow functions
        return names.map((name, index) => {
            return <NameComponent 
                key={index}
                name={name} />
        })
    }

    getCountErrorMessage() {
        const count = this.state.count;
        // Check string literal and ternary operator
        if(count > 3) {
            return <div 
            className={`p-2 mb-0 ${count > 5 ? "bg-danger" : "bg-warning"}`}>
                Count is too high!!!
            </div>
        }
        return null;
    }

    render() {
        return <div>
                <Alert variant="info" className="d-flex align-items-center">
                    Class component {this.state.name} {this.props.lastName}
                    <Button 
                        variant="success"
                        onClick={this.handleClick}
                        className="ms-auto">Change</Button>
                    <Button 
                        variant="outline-primary mx-1"
                        onClick={this.decrement}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <Button 
                        variant="outline-primary mx-1"
                        onClick={this.increment}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Alert>
            <div className="d-flex align-items-center mb-3">
                <Badge pill bg="primary me-3">
                    {this.state.count}
                </Badge>
                {this.getCountErrorMessage()}
            </div>
            {this.renderNames()}
        </div>
    }
}
export default ClassComponent;