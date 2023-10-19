import { createContext, useState } from "react";
import Home from "./Home";
import './Toggle.css'


export const ThemeContext = createContext(null)
const ToggleTheme = () => {
    const [theme, setTheme] = useState("dark");
    const toggle=()=>{
        setTheme((curr => (curr=== "light" ? "dark" : "light")))
    }
    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            <div className="ap" id={theme}>
            <Home></Home>
            
        </div>
        </ThemeContext.Provider>
    );
};

export default ToggleTheme;

    
