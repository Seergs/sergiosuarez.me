import React from "react";
import styled, { css } from "styled-components/macro";
import LogoSvg from "../svg/logo.svg";
import mixins from "../theme/mixins";
import { Link as GatsbyLink } from "gatsby";
import { useLocation } from "@reach/router";
const { flexRow, justifyBetween } = mixins;

const Wrapper = styled.footer`
  margin-top: 8rem;
  ${flexRow};
  ${justifyBetween}
`;

const Logo = styled(LogoSvg)`
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
    color: ${props.theme.headings};
    position: relative;
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

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <GatsbyLink to={pathname.includes("en") ? "/en" : "/es"}>
        <Logo />
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
