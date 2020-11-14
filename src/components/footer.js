import React from "react";
import styled, { css } from "styled-components/macro";
import LogoSvg from "../svg/logo.svg";
import mixins from "../theme/mixins";
import { Link as GatsbyLink } from "gatsby";
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
  text-decoration: none;
  color: ${(props) => props.theme.headings};
`;

export default function Footer() {
  return (
    <Wrapper>
      <GatsbyLink to="/">
        <Logo />
      </GatsbyLink>
      <LinkList>
        <LinkItem>
          <Link href="https://github.com/seergs" target="_blank">
            github
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://www.linkedin.com/in/sergioseerg/" target="_blank">
            linkedin
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://twitter.com/Seergstate" target="_blank">
            twitter
          </Link>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
}
