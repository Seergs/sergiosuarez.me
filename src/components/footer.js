import React from "react";
import styled, { css } from "styled-components/macro";
import mixins from "../theme/mixins";
import { Link as GatsbyLink } from "gatsby";
import { useLocation } from "@reach/router";
import { ThemeContext } from "../context/theme-context";
import LogoLight from "../svg/logo-light.svg";
import LogoDark from "../svg/logo-dark.svg";
const { flexRow, justifyBetween } = mixins;

const Wrapper = styled.footer`
  margin-top: 8rem;
  ${flexRow};
  ${justifyBetween}
`;

const LightLogo = styled(LogoLight)`
  width: 3rem;
  height: auto;
`;

const DarkLogo = styled(LogoDark)`
  width: 3rem;
  height: auto;
`;

const LinkList = styled.ul`
  list-style-type: none;
  ${flexRow};
  gap: 4rem;
`;
const LinkItem = styled.li``;
const Link = styled.a`
  ${(props) => css`
    text-decoration: none;
    color: var(--color-headings);
    position: relative;
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

export default function Footer() {
  const { pathname } = useLocation();
  const { colorMode } = React.useContext(ThemeContext);
  return (
    <Wrapper>
      <GatsbyLink to={pathname.includes("en") ? "/en" : "/es"}>
        {colorMode === "light" ? <DarkLogo /> : <LightLogo />}
      </GatsbyLink>
      <LinkList>
        <LinkItem>
          <Link href="https://github.com/seergs" target="_blank" rel="noopener">
            github
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            href="https://www.linkedin.com/in/sergioseerg/"
            target="_blank"
            rel="noopener"
          >
            linkedin
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            href="https://twitter.com/Seergstate"
            target="_blank"
            rel="noopener"
          >
            twitter
          </Link>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
}
