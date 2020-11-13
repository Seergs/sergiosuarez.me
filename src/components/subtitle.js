import styled, { css } from "styled-components/macro";

const Subtitle = styled.h2`
  ${(props) => css`
    color: ${props.theme.headings};
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 2rem;
  `}
`;

export default Subtitle;
