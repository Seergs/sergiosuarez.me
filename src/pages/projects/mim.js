import React from "react";
import {
  Layout,
  Title,
  MIMDescription,
  StackCollapsed,
  Motivation,
  StackExplanation,
  ReactIcon,
  Solution,
  Features,
} from "../../components";
import styled, { css } from "styled-components/macro";
import useTranslation from "../../hooks/useTranslation";
import mixins from "../../theme/mixins";
import FlaskIcon from "../../svg/flask.svg";
import AzureIcon from "../../svg/azure.svg";
const { flexRow, justifyBetween } = mixins;

const StyledMIM = styled.div``;

const Row = styled.div`
  ${flexRow};
  ${justifyBetween};
  margin: 4rem 0;
`;

export default function MIM() {
  const { t } = useTranslation();

  function features() {
    const f = [];
    for (let i = 0; i < 6; ++i) {
      f.push(t(`project_page.mim.solution.list.${i + 1}`));
    }

    return f;
  }

  return (
    <Layout>
      <StyledMIM>
        <Title>Master Incident Manager</Title>
        <Row>
          <MIMDescription />
          <StackCollapsed
            stack={["React", "Flask", "Azure", "MongoDB", "Netlify", "Heroku"]}
          />
        </Row>
        <Row>
          <Motivation text={t("project_page.mim.motivation")} />
        </Row>
        <StackExplanation stack={stack} />
        <Solution project="mim" />
        <Features features={features()} />
      </StyledMIM>
    </Layout>
  );
}

const stack = [
  {
    name: "React",
    textId: "project_page.mim.stack.react",
    Icon: ReactIcon,
  },
  {
    name: "Flask",
    textId: "project_page.mim.stack.flask",
    Icon: FlaskIcon,
  },
  {
    name: "Azure",
    textId: "project_page.mim.stack.azure",
    Icon: AzureIcon,
  },
];
