import * as React from "react";
import theme from "../theme/theme";

export const ThemeContext = React.createContext();

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
    console.log(newValue);
    const root = window.document.documentElement;

    rawSetColorMode(newValue);
    localStorage.setItem("color-mode", newValue);

    root.style.setProperty(
      "--color-text",
      newValue === "light" ? theme.light.text : theme.dark.text
    );
    root.style.setProperty(
      "--color-background",
      newValue === "light" ? theme.light.bg : theme.dark.bg
    );
    root.style.setProperty(
      "--color-headings",
      newValue === "light" ? theme.light.headings : theme.dark.headings
    );
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
