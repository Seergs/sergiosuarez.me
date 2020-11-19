import React from "react";
import LogoDark from "../svg/logo-dark.svg";
import LogoLight from "../svg/logo-light.svg";
import styled from "styled-components/macro";
import { ThemeContext } from "../context/theme-context";
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

export default function Header() {
  const { colorMode } = React.useContext(ThemeContext);
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Link to={pathname.includes("en") ? "/en" : "/es"}>
        {colorMode === "light" ? <DarkLogo /> : <LightLogo />}
      </Link>
      <Container>
        <LanguageSwitcher />
        <ThemeSwitch />
      </Container>
    </Wrapper>
  );
}
