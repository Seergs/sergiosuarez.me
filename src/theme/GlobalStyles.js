import { createGlobalStyle } from 'styled-components';
import { mediaQueries } from './breakpoints';

const GlobalStyles = createGlobalStyle`
body {
  padding: 2rem;
  padding-top: 0;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--color-background);
  overflow-x: hidden;

  ${mediaQueries('md')`
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
`;

export default GlobalStyles;
