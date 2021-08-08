import React from 'react';
import styled, { css } from 'styled-components/macro';
import Chevron from '../svg/chevron.svg';
import mixins from '../theme/mixins';

const { justifyCenter, alignCenter } = mixins;

export const StyledTextLink = styled.span`
  ${(props) => css`
    position: relative;
    color: ${props.isPrimaryColor
    ? 'var(--color-primary)'
    : 'var(--color-headings)'};
    font-weight: 600;
    ${justifyCenter};
    ${alignCenter};
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;
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
    ? 'var(--color-primary)'
    : 'var(--color-headings)'};
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    svg > path {
      fill: ${props.isPrimaryColor
    ? 'var(--color-primary)'
    : 'var(--color-headings)'};
    }
  `}
`;

export default function TextLink({ children, isPrimaryColor = false }) {
  return (
    <StyledTextLink isPrimaryColor={isPrimaryColor}>
      {children}
      <Chevron />
    </StyledTextLink>
  );
}
