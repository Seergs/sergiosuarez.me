import styled, { css } from "styled-components/macro";

const Title = styled.h1`
  ${(props) => css`
    color: var(--color-headings);
  `}
`;

export default Title;
