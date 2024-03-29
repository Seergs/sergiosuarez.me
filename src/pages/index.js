import React from 'react';
import { graphql } from 'gatsby';
import {
  Introduction,
  Layout,
  About,
  Skills,
  Projects,
  Contact,
} from '../components';
import Timeline from '../components/timeline';

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.edges.map((edge) => edge.node.fluid);
  const resumeLink = data.allFile.edges[0].node.publicURL;
  return (
    <Layout pageTitle="Sergio Suárez">
      <Introduction />
      <About resumeLink={resumeLink} />
      <Timeline />
      <Skills />
      <Projects images={images} />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    allImageSharp(filter: { fluid: { originalName: { regex: "/home/" } } }) {
      edges {
        node {
          fluid(maxWidth: 1200, quality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allFile(filter: { base: { eq: "resume.pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
