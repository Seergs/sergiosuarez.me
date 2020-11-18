import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider } from "./src/context/theme-context";
import theme from "./src/theme/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <StyledProvider theme={theme.light}>{element}</StyledProvider>
  </ThemeProvider>
);
