import React from "react";
import styled, { css } from "styled-components/macro";
import Chevron from "../svg/chevron.svg";
import mixins from "../theme/mixins";
import { Link as GatsbyLink } from "gatsby";
const { flexRow, justifyCenter, alignCenter } = mixins;

export const StyledLink = styled.span`
  ${(props) => css`
    position: relative;
    color: ${props.theme.headings};
    font-weight: 600;
    ${justifyCenter};
    ${alignCenter};
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
    background-color: transparent;
    border: 0;
    svg {
      margin-left: 3px;
    }

    &::after {
      position: absolute;
      content: "";
      bottom: -3px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: ${props.theme.headings};
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  `}
`;

export default function Link({ children }) {
  return (
    <StyledLink>
      {children}
      <Chevron />
    </StyledLink>
  );
}
