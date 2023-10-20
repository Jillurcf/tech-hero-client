import { useEffect, useState } from "react";



const Theme = () => {

    const [theme, setTheme] = useState("light");

    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[theme]);

    const handleThemeSwitch = ()=>{
        setTheme(theme === "dark" ? "light" : "dark")
    };


    return (
        <div className="">
            <button className="ml-2 bg-blue-400 p-2 rounded-3xl font-bold" onClick={handleThemeSwitch}>{theme === "dark" ? "Light" : "Dark"}</button>
        </div>
    );
};

export default Theme;