import { createGlobalStyle, css } from "styled-components";
import { mediaQueries } from "./breakpoints";

const GlobalStyles = createGlobalStyle`
${(props) => css`
  body {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--color-background);

    ${mediaQueries("md")`
      padding: 1.5rem;
    `}
  }
  *,
  *::after,
  *::before {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 2px solid var(--color-focusOutline);
  }
`}
`;

export default GlobalStyles;
