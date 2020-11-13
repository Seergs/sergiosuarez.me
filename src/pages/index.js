import React from "react";
import {
  Header,
  Introduction,
  Layout,
  About,
  Skills,
  Projects,
} from "../components";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.edges.map((edge) => edge.node.fluid);
  return (
    <Layout>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects images={images} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    allImageSharp {
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
