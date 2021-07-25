import React from 'react';
import styled from 'styled-components/macro';
import { graphql } from 'gatsby';
import {
  Layout,
  Title,
  StackCollapsed,
  Motivation,
  StackExplanation,
  Solution,
  Features,
  Images,
  Description,
  Links,
} from '../../components';
import useTranslation from '../../hooks/useTranslation';
import mixins from '../../theme/mixins';
import GatsbyIcon from '../../svg/gatsby.svg';
import { mediaQueries } from '../../theme/breakpoints.ts';

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
    name: 'Gatsby',
    textId: 'project_page.hp.stack.gatsby',
    Icon: GatsbyIcon,
  },
];

export default function Chatify({ data }) {
  const { t } = useTranslation();
  const images = data.allImageSharp.edges.map((edge) => edge.node.fluid);

  function features() {
    const f = [];
    for (let i = 0; i < 3; i += 1) {
      f.push(t(`project_page.hp.solution.list.${i + 1}`));
    }

    return f;
  }

  return (
    <Layout pageTitle="HP Wiki • Sergio">
      <StyledMIM>
        <Title>Harry Potter wiki</Title>
        <Row>
          <Description projectName="hp">
            <Links
              live="https://hpwiki.netlify.app/"
              clientRepo="https://github.com/Seergs/harrypotter-wiki"
            />
          </Description>
          <StackCollapsed
            stack={['Gatsby', 'Netlify', 'styled-components', 'framer-motion']}
          />
        </Row>
        <Row>
          <Motivation text={t('project_page.hp.motivation')} />
        </Row>
        <StackExplanation stack={stack} />
        <Solution project="hp" />
        <Features features={features()} />
        <Images images={images} projectName="hp" />
      </StyledMIM>
    </Layout>
  );
}

export const pageQuery = graphql`
  query HpWikiPageQuery {
    allImageSharp(filter: { fluid: { originalName: { regex: "/hp/" } } }) {
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
