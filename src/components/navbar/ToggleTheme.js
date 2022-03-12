import { useTheme } from "../../ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';

function calculate(param) {
    let result = 0;
    for (let i = 0; i < 9999999; i++) {
        result = result + 1;
    }
    return result + param;
}

function ToggleTheme () {
    //useMemo example
    let initialValue = 0;
    const calculateResult = useMemo(() => {
        return calculate(initialValue);
    }, [initialValue])
    console.log(calculateResult);


    const [theme, toggleTheme] = useTheme();

    return (
        <span className={theme ? 'text-dark' : 'text-light'}>
            <FontAwesomeIcon 
                size="lg"
                onClick={toggleTheme}
                icon={theme ? faToggleOn : faToggleOff}/>
        </span>
    )
}

export default ToggleTheme;