import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
${(props) => css`
  body {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--color-background);
  }
  *,
  *::after,
  *::before {
    font-family: "Montserrat";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 2px solid ${props.theme.focusOutline};
  }
`}
`;

export default GlobalStyles;
