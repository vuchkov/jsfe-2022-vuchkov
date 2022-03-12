import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}
export function ThemeProvider(props) {
    const [lightTheme, setLightTheme] = useState(true);
    
    const toggleTheme = () => {
        setLightTheme(!lightTheme);
    }

    return (
        <ThemeContext.Provider value={[lightTheme, toggleTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}