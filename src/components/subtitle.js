import styled, { css } from "styled-components/macro";

const Subtitle = styled.h2`
  ${(props) => css`
    color: var(--color-headings);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 2rem;
  `}
`;

export default Subtitle;
