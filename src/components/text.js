import styled, { css } from "styled-components/macro";

const Text = styled.p`
  ${(props) => css`
    color: ${props.theme.text};
    max-width: 600px;
    line-height: 1.8;
    letter-spacing: 1px;
  `}
`;

export default Text;
