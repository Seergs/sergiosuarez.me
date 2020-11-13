import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        padding: 2rem;
        font-family: 'Montserrat';
        max-width: 1200px;
        margin: 0 auto;
    }
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
