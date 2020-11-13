import React from "react";
import styled, { css } from "styled-components/macro";
import Subtitle from "./subtitle";
import Text from "./text";
import List from "./list";
import useTranslation from "../hooks/useTranslation";
import mixins from "../theme/mixins";
const { flexRow, justifyBetween } = mixins;

const Wrapper = styled.section`
  margin-bottom: 4rem;
  ${Text}:nth-of-type(2) {
    margin: 1rem 0 2rem 0;
  }
`;

const Lists = styled.ul`
  ${flexRow};
  ${justifyBetween};
`;

const skills = {
  col_1: ["Javascript", "Typescript", "Python", "SQL", "C#", "Java"],
  col_2: ["ReactJs", "Gatsby", "Node.js", "NextJs", "Express", "Redux"],
  col_3: ["git/Github", "Netlify", "Heroku", "Azure", "Firebase", "MongoDB"],
};

export default function Skills() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subtitle>Skills</Subtitle>
      <Text>{t("home.skills.text.1")}</Text>
      <Text>{t("home.skills.text.2")}</Text>
      <Lists>
        <List title={t("home.skills.col_1")} items={skills.col_1} />
        <List title={t("home.skills.col_2")} items={skills.col_2} />
        <List title={t("home.skills.col_3")} items={skills.col_3} />
      </Lists>
    </Wrapper>
  );
}
