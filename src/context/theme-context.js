import * as React from "react";
import theme from "../theme/theme";

export const ThemeContext = React.createContext("");

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;

    rawSetColorMode(newValue);
    localStorage.setItem("color-mode", newValue);

    Object.entries(theme[newValue]).forEach(([colorName, color]) => {
      const cssVarName = `--color-${colorName}`;

      root.style.setProperty(cssVarName, color);
    });
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
