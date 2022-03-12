import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('component rendered');
        setCount(5);
    }, []);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return <div>
        Functional Component {props.name}
        {props.children}
        {count}
        <Button variant="outline-primary mx-1"
                onClick={decrement}>
                <FontAwesomeIcon icon={faMinus}/>
        </Button>
        <Button variant="outline-primary mx-1"
                onClick={increment}>
            <FontAwesomeIcon icon={faPlus} />
        </Button>
    </div>
}

export default FunctionalComponent;