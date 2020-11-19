import styled, { css } from "styled-components/macro";

const Button = styled.a`
  ${(props) => css`
    font-weight: 500;
    color: var(--color-headings);
    border-bottom: 3px solid var(--color-primary);
    cursor: pointer;
    transition: all 0.2s ease-out;
    text-decoration: none;
    display: inline-block;

    &:hover {
      border-bottom: 3px solid transparent;
    }
  `}
`;

export default Button;
