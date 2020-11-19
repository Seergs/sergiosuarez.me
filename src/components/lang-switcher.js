import React, { useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import useLanguage from "../hooks/useLanguage";
import ChevronDown from "../svg/chevron-down.svg";
import mixins from "../theme/mixins";
import { Link as GatsbyLink } from "gatsby";
import useClickOutside from "../hooks/useClickOutside";
import USFlag from "../svg/en.svg";
import SpainFlag from "../svg/es.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "@reach/router";
import { createChangeLangLink } from "../utils/create-link";
const { flexRow, alignCenter } = mixins;

const Wrapper = styled.div``;

const StyledLanguageSwitcher = styled.button`
  ${(props) => css`
    color: var(--color-headings);
    position: relative;
    font-weight: 600;
    background: transparent;
    border: 0;
    ${flexRow};
    ${alignCenter};
    cursor: pointer;

    svg:nth-child(2) {
      fill: var(--color-text);
    }

    svg:first-child {
      width: 20px;
      margin-right: 8px;
    }
  `}
`;

const LanguagesList = styled(motion.ul)`
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
    color: var(--color-headings);
    font-size: 0.9rem;
    &::after {
      position: absolute;
      content: "";
      bottom: -3px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: var(--color-headings);
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  `}
`;

const SvgWrapper = styled(motion.div)`
  ${flexRow};
  ${alignCenter};
`;

export default function LangSwitcher() {
  const [isDropdownOpen, setIsDropdowOpen] = useState(false);
  const language = useLanguage();
  const { pathname } = useLocation();

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
        <SvgWrapper
          animate={
            isDropdownOpen
              ? {
                  rotateX: 180,
                }
              : { rotateX: 0 }
          }
        >
          <ChevronDown />
        </SvgWrapper>
        <AnimatePresence>
          {isDropdownOpen && (
            <LanguagesList
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
            >
              <LanguageListItem>
                <Link to={createChangeLangLink({ pathname, newPath: "en" })}>
                  EN
                </Link>
              </LanguageListItem>
              <LanguageListItem>
                <Link to={createChangeLangLink({ pathname, newPath: "es" })}>
                  ES
                </Link>
              </LanguageListItem>
            </LanguagesList>
          )}
        </AnimatePresence>
      </StyledLanguageSwitcher>
    </Wrapper>
  );
}
