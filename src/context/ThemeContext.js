import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(theme);
        root.classList.remove(colorTheme);
    }, [setTheme, colorTheme]);

    const handleClick = (e) => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };

    const data = { theme, handleClick };

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider };
export default ThemeContext;
