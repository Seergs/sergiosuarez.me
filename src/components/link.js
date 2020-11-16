import React from "react";
import styled, { css } from "styled-components/macro";
import Chevron from "../svg/chevron.svg";
import mixins from "../theme/mixins";
const { justifyCenter, alignCenter } = mixins;

export const StyledLink = styled.span`
  ${(props) => css`
    position: relative;
    color: ${props.isPrimaryColor ? props.theme.teal : props.theme.headings};
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
      background-color: ${props.isPrimaryColor
        ? props.theme.teal
        : props.theme.headings};
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    svg > path {
      fill: ${props.isPrimaryColor ? props.theme.teal : props.theme.headings};
    }
  `}
`;

export default function Link({ children, isPrimaryColor = false }) {
  return (
    <StyledLink isPrimaryColor={isPrimaryColor}>
      {children}
      <Chevron />
    </StyledLink>
  );
}
