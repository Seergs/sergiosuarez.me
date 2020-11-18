import React, { useState } from "react";
import LogoSvg from "../svg/logo.svg";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import LanguageSwitcher from "./lang-switcher";
import mixins from "../theme/mixins";
import { useLocation } from "@reach/router";
import ThemeSwitch from "./theme-switch";
const { justifyBetween, flexRow, alignCenter } = mixins;

const Wrapper = styled.header`
  margin-bottom: 4rem;
  ${flexRow};
  ${justifyBetween};
`;

const Logo = styled(LogoSvg)`
  width: 3rem;
  height: auto;
`;

const Container = styled.div`
  ${flexRow};
  ${alignCenter};
  gap: 2rem;
`;

export default function Header() {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Link to={pathname.includes("en") ? "/en" : "/es"}>
        <Logo />
      </Link>
      <Container>
        <LanguageSwitcher />
        <ThemeSwitch />
      </Container>
    </Wrapper>
  );
}
