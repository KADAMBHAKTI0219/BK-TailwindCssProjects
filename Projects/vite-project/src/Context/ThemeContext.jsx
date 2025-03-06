import { createContext, useEffect, useState } from "react";

// cpc
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);
      const toggleTheme = () => {
        setDarkMode((prev) => !prev);
      };
    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>)
}