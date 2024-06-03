import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setToggle(!toggle);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
