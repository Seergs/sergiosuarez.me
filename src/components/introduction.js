import React from "react";
import styled, { css } from "styled-components/macro";
import useTranslation from "../hooks/useTranslation";
import { mediaQueries } from "../theme/breakpoints";

const Intro = styled.section`
  ${(props) => css`
    color: var(--color-headings);
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 4rem;

    ${mediaQueries("md")`
    font-size: 2rem;
   `}
    ${mediaQueries("lg")`
    line-height: 1.1;
   `}
  `}
`;

const Greeting = styled.div``;

const Name = styled.span`
  font-size: 3.5rem;
  color: var(--color-primary);
  white-space: nowrap;

  ${mediaQueries("md")`
    font-size: 2.5rem;
   `}
  ${mediaQueries("lg")`
    line-height: 1.4;
   `}
`;

const Description = styled.div`
  ${mediaQueries("lg")`
    font-size: 1.8rem;
  `}
`;

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <Intro>
      <Greeting>
        {t("home.welcome.title")}
        <Name>{` ${t("home.welcome.name")}`}</Name>
      </Greeting>
      <Description>
        {t("home.welcome.description.1")}
        <br />
        {t("home.welcome.description.2")}
      </Description>
    </Intro>
  );
}
