import React from "react";
import {
  Layout,
  Title,
  StackCollapsed,
  Motivation,
  StackExplanation,
  ReactIcon,
  Solution,
  Features,
  Images,
  Description,
  Links,
} from "../../components";
import styled from "styled-components/macro";
import useTranslation from "../../hooks/useTranslation";
import mixins from "../../theme/mixins";
import FlaskIcon from "../../svg/flask.svg";
import AzureIcon from "../../svg/azure.svg";
import { graphql } from "gatsby";
import { mediaQueries } from "../../theme/breakpoints";
const { flexRow, justifyBetween } = mixins;

const StyledMIM = styled.div``;

const Row = styled.div`
  ${flexRow};
  ${justifyBetween};
  margin: 3rem 0;

  ${mediaQueries("xl")`
    flex-direction: column;
  `}
`;

export default function MIM({ data }) {
  const { t } = useTranslation();
  const images = data.allImageSharp.edges.map((edge) => edge.node.fluid);

  function features() {
    const f = [];
    for (let i = 0; i < 6; ++i) {
      f.push(t(`project_page.mim.solution.list.${i + 1}`));
    }

    return f;
  }

  return (
    <Layout pageTitle="MIM • Sergio">
      <StyledMIM>
        <Title>Master Incident Manager</Title>
        <Row>
          <Description projectName="mim">
            <Links live="https://master-incident-management.netlify.app/" />
          </Description>
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
        <Images images={images} projectName="mim" />
      </StyledMIM>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MIMPageQuery {
    allImageSharp(filter: { fluid: { originalName: { regex: "/mim/" } } }) {
      edges {
        node {
          fluid(maxWidth: 1200, quality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

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
