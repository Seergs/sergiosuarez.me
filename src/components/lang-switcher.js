import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { Link as GatsbyLink } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@reach/router';
import useLanguage from '../hooks/useLanguage';
import ChevronDown from '../svg/chevron-down.svg';
import mixins from '../theme/mixins';
import useClickOutside from '../hooks/useClickOutside';
import USFlag from '../svg/en.svg';
import SpainFlag from '../svg/es.svg';
import { createChangeLangLink } from '../utils/create-link';
import useTranslation from '../hooks/useTranslation';

const { flexRow, alignCenter } = mixins;

const Wrapper = styled.div``;

const StyledLanguageSwitcher = styled.button`
  color: var(--color-headings);
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
`;

const LanguagesList = styled(motion.ul)`
  position: absolute;
  top: 1.5rem;
  list-style-type: none;
`;

const LanguageListItem = styled.li`
  margin: 0.5rem 0;
`;

const Link = styled(GatsbyLink)`
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: var(--color-headings);
  font-size: 0.9rem;
  ${flexRow};
  ${alignCenter};
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
`;

const SvgWrapper = styled(motion.div)`
  ${flexRow};
  ${alignCenter};

  svg {
    fill: var(--color-text);
  }
`;

const StyledUSFlag = styled(USFlag)`
  width: 20px;
  margin-left: 3px;
`;

const StyledSpainFlag = styled(SpainFlag)`
  width: 20px;
  margin-left: 3px;
`;

export default function LangSwitcher() {
  const [isDropdownOpen, setIsDropdowOpen] = useState(false);
  const language = useLanguage();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const ref = useRef();

  useClickOutside(ref, () => setIsDropdowOpen(false));

  function onClick() {
    setIsDropdowOpen((prev) => !prev);
  }

  return (
    <Wrapper ref={ref}>
      <StyledLanguageSwitcher onClick={onClick}>
        {language === 'EN' ? <USFlag /> : <SpainFlag />}
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
                <Link
                  title={t('english')}
                  to={createChangeLangLink({ pathname, newPath: 'en' })}
                >
                  EN
                  {' '}
                  <StyledUSFlag />
                </Link>
              </LanguageListItem>
              <LanguageListItem>
                <Link
                  title={t('spanish')}
                  to={createChangeLangLink({ pathname, newPath: 'es' })}
                >
                  ES
                  {' '}
                  <StyledSpainFlag />
                </Link>
              </LanguageListItem>
            </LanguagesList>
          )}
        </AnimatePresence>
      </StyledLanguageSwitcher>
    </Wrapper>
  );
}
