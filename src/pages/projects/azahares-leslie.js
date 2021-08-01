import React from 'react';
import styled from 'styled-components/macro';
import { graphql } from 'gatsby';
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
} from '../../components';
import useTranslation from '../../hooks/useTranslation';
import mixins from '../../theme/mixins';
import { mediaQueries } from '../../theme/breakpoints';

const { flexRow, justifyBetween } = mixins;

const StyledMIM = styled.div``;

const Row = styled.div`
  ${flexRow};
  ${justifyBetween};
  margin: 4rem 0;

  ${mediaQueries('xl')`
    flex-direction: column;
  `}
`;

const stack = [
  {
    name: 'React',
    textId: 'project_page.azahares.stack.react',
    Icon: ReactIcon,
  },
];

export default function AzaharesLeslie({ data }) {
  const { t } = useTranslation();
  const images = data.allImageSharp.edges.map((edge) => edge.node.fluid);

  function features() {
    const f = [];
    for (let i = 0; i < 3; i += 1) {
      f.push(t(`project_page.azahares.solution.list.${i + 1}`));
    }

    return f;
  }

  return (
    <Layout pageTitle="Azahares Leslie • Sergio">
      <StyledMIM>
        <Title>Azahares Leslie</Title>
        <Row>
          <Description projectName="azahares">
            <Links live="https://azaharesleslie.netlify.app/" />
          </Description>
          <StackCollapsed
            stack={['React', 'Netlify', 'styled-components', 'framer-motion']}
          />
        </Row>
        <Row>
          <Motivation text={t('project_page.azahares.motivation')} />
        </Row>
        <StackExplanation stack={stack} />
        <Solution project="azahares" />
        <Features features={features()} />
        <Images images={images} projectName="azahares" />
      </StyledMIM>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AzaharesPageQuery {
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/azahares/" } } }
    ) {
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
