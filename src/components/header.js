import React from 'react';
import styled from 'styled-components/macro';
import { Link as GatsbyLink } from 'gatsby';
import { useLocation } from '@reach/router';
import LogoDark from '../svg/logo-dark.svg';
import LogoLight from '../svg/logo-light.svg';
import { ThemeContext } from '../context/theme-context';
import LanguageSwitcher from './lang-switcher';
import mixins from '../theme/mixins';
import ThemeSwitch from './theme-switch';

const { justifyBetween, flexRow, alignCenter } = mixins;

const Wrapper = styled.header`
  position: sticky;
  margin-bottom: 2rem;
  margin-top: 1em;
  padding: 10px 0;
  top: 0;
  background-color: var(--color-background);
  z-index: 3;
  opacity: 0.98;
  ${flexRow};
  ${justifyBetween};
`;

const LightLogo = styled(LogoLight)`
  width: 3rem;
  height: auto;
`;

const DarkLogo = styled(LogoDark)`
  width: 3rem;
  height: auto;
`;

const Container = styled.div`
  ${flexRow};
  ${alignCenter};
  gap: 2rem;
`;

const Link = styled(GatsbyLink)`
  ${flexRow};
  ${alignCenter};
`;

export default function Header() {
  const { colorMode } = React.useContext(ThemeContext);
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Link to={pathname.includes('en') ? '/en' : '/es'}>
        {colorMode === 'light' ? <DarkLogo /> : <LightLogo />}
      </Link>
      <Container>
        <LanguageSwitcher />
        <ThemeSwitch />
      </Container>
    </Wrapper>
  );
}
