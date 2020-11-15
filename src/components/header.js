import React from "react";
import LogoSvg from "../svg/logo.svg";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import LanguageSwitcher from "./lang-switcher";
import mixins from "../theme/mixins";
import { useLocation } from "@reach/router";
const { justifyBetween, flexRow } = mixins;

const Wrapper = styled.header`
  margin-bottom: 4rem;
  ${flexRow};
  ${justifyBetween};
`;

const Logo = styled(LogoSvg)`
  width: 3rem;
  height: auto;
`;

export default function Header() {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Link to={pathname.includes("en") ? "/en" : "/es"}>
        <Logo />
      </Link>
      <LanguageSwitcher />
    </Wrapper>
  );
}
