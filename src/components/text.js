import styled, { css } from "styled-components/macro";

const Text = styled.p`
  ${(props) => css`
    color: ${props.theme.text};
    max-width: 700px;
    line-height: 1.8;
    letter-spacing: 1px;
  `}
`;

export default Text;
