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
import NodeIcon from '../../svg/node.svg';
import SocketIcon from '../../svg/socketio.svg';
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
    textId: 'project_page.chatify.stack.react',
    Icon: ReactIcon,
  },
  {
    name: 'socket.io',
    textId: 'project_page.chatify.stack.socket_io',
    Icon: SocketIcon,
  },
  {
    name: 'NodeJs',
    textId: 'project_page.chatify.stack.node',
    Icon: NodeIcon,
  },
];

export default function Chatify({ data }) {
  const { t } = useTranslation();
  const images = data.allImageSharp.edges.map((edge) => edge.node.fluid);

  function features() {
    const f = [];
    for (let i = 0; i < 3; i += 1) {
      f.push(t(`project_page.chatify.solution.list.${i + 1}`));
    }

    return f;
  }

  return (
    <Layout pageTitle="Chatify • Sergio">
      <StyledMIM>
        <Title>Chatify</Title>
        <Row>
          <Description projectName="chatify">
            <Links
              live="https://chatifywith.netlify.app/"
              serverRepo="https://github.com/Seergs/chatify-server"
              clientRepo="https://github.com/Seergs/chatify-client"
            />
          </Description>
          <StackCollapsed
            stack={[
              'React',
              'NodeJs',
              'socket.io',
              'TailwindCSS',
              'MongoDB',
              'Heroku',
            ]}
          />
        </Row>
        <Row>
          <Motivation text={t('project_page.chatify.motivation')} />
        </Row>
        <StackExplanation stack={stack} />
        <Solution project="chatify" />
        <Features features={features()} />
        <Images images={images} projectName="chatify" />
      </StyledMIM>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ChatifyPageQuery {
    allImageSharp(filter: { fluid: { originalName: { regex: "/chatify/" } } }) {
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
