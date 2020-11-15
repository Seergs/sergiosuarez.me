import React, { useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import useLanguage from "../hooks/useLanguage";
import ChevronDown from "../svg/chevron-down.svg";
import mixins from "../theme/mixins";
import { Link as GatsbyLink } from "gatsby";
import useClickOutside from "../hooks/useClickOutside";
import USFlag from "../svg/en.svg";
import SpainFlag from "../svg/es.svg";
const { flexRow, alignCenter } = mixins;

const Wrapper = styled.div``;

const StyledLanguageSwitcher = styled.button`
  ${(props) => css`
    color: ${props.theme.headings};
    position: relative;
    font-weight: 600;
    background: transparent;
    border: 0;
    ${flexRow};
    ${alignCenter};
    cursor: pointer;

    svg:first-child {
      width: 20px;
      margin-right: 8px;
    }
  `}
`;

const LanguagesList = styled.ul`
  position: absolute;
  bottom: -4rem;
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

  useClickOutside(ref, () => setIsDropdowOpen(false));

  function onClick() {
    setIsDropdowOpen((prev) => !prev);
  }

  return (
    <Wrapper ref={ref}>
      <StyledLanguageSwitcher onClick={onClick}>
        {language === "EN" ? <USFlag /> : <SpainFlag />}
        {language}
        <ChevronDown />
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
      </StyledLanguageSwitcher>
    </Wrapper>
  );
}
