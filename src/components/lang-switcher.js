import React, { useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import useLanguage from "../hooks/useLanguage";
import ChevronDown from "../svg/chevron-down.svg";
import mixins from "../theme/mixins";
import { Link as GatsbyLink } from "gatsby";
import useClickOutside from "../hooks/useClickOutside";
const { flexRow, alignCenter } = mixins;

const Wrapper = styled.div`
  position: relative;
`;

const StyledLanguageSwitcher = styled.button`
  ${(props) => css`
    color: ${props.theme.headings};
    font-weight: 600;
    background: transparent;
    border: 0;
    ${flexRow};
    ${alignCenter};
    cursor: pointer;
  `}
`;

const LanguagesList = styled.ul`
  position: absolute;
  list-style-type: circle;
`;

const LanguageListItem = styled.li`
  margin: 0.5rem 0;
`;

const Link = styled(GatsbyLink)`
  ${(props) => css`
    text-decoration: none;
    position: relative;
    display: inline-block;
    color: ${props.theme.headings};
    font-size: 0.9rem;
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

export default function LangSwitcher() {
  const [isDropdownOpen, setIsDropdowOpen] = useState(false);
  const language = useLanguage();

  const ref = useRef();

  useClickOutside(ref, onClick);

  function onClick() {
    setIsDropdowOpen((prev) => !prev);
  }

  return (
    <Wrapper ref={ref}>
      <StyledLanguageSwitcher onClick={onClick}>
        {language}
        <ChevronDown />
      </StyledLanguageSwitcher>
      {isDropdownOpen && (
        <LanguagesList>
          <LanguageListItem>
            <Link to="/en">EN</Link>
          </LanguageListItem>
          <LanguageListItem>
            <Link to="/es">ES</Link>
          </LanguageListItem>
        </LanguagesList>
      )}
    </Wrapper>
  );
}
