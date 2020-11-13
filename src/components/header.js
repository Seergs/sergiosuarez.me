import React from "react";
import LogoSvg from "../svg/logo.svg";
import styled from "styled-components/macro";
import { Link } from "gatsby";

const Wrapper = styled.header`
  margin-bottom: 4rem;
`;

const Logo = styled(LogoSvg)`
  width: 3rem;
  height: auto;
`;

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
    </Wrapper>
  );
}
