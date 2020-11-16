import React from "react";
import {
  Layout,
  Title,
  MIMDescription,
  StackCollapsed,
  Motivation,
} from "../../components";
import styled, { css } from "styled-components/macro";
import useTranslation from "../../hooks/useTranslation";
import mixins from "../../theme/mixins";

const { flexRow, justifyBetween } = mixins;

const StyledMIM = styled.div``;

const Row = styled.div`
  ${flexRow};
  ${justifyBetween};
  margin: 4rem 0;
`;

export default function MIM() {
  const { t } = useTranslation();

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
        <Motivation text={t("project_page.mim.motivation")} />
      </StyledMIM>
    </Layout>
  );
}
