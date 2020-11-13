import React from "react";
import styled, { css } from "styled-components/macro";
import Image from "gatsby-image";
import Text from "./text";
import Button from "./link";
import { Link } from "gatsby";
import useTranslation from "../hooks/useTranslation";

const Card = styled.li`
  ${(props) => css`
    &:nth-child(1) {
      grid-column: 1 / 5;
      text-align: center;
      ${ImageContainer} {
        background-color: #f9fbfb;
      }

      ${Text} {
        margin: 0 auto 1rem auto;
      }
    }
    &:nth-child(2) {
      grid-column: 1 / 3;
      ${ImageContainer} {
        height: 350px;
        background-color: #fdfff4;
      }
    }
    &:nth-child(3) {
      grid-column: 3 / 5;
      ${ImageContainer} {
        height: 350px;
        background-color: #f1f2fa;
      }
    }
    &:nth-child(4) {
      grid-column: 2 / 4;
      ${ImageContainer} {
        background-color: #f9fbfb;
      }
    }
    ${Text} {
      margin-bottom: 1rem;
    }
  `}
`;

const ImageContainer = styled(Link)`
  border-radius: 5px;
  align-items: center;
  display: flex;

  transition: transform 0.3s ease-in-out;
  .gatsby-image-wrapper {
    width: 100%;
  }

  &:hover {
    transform: scale(1.01);
  }
`;

const ProjectName = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.headings};
`;

export default function ProjectCard({ name, image }) {
  const { t } = useTranslation();

  return (
    <Card>
      <ImageContainer to={`/projects/${name}`}>
        <Image fluid={image} />
      </ImageContainer>
      <ProjectName to={`/projects/${name}`}>
        {t(`home.projects_section.projects.${name}.name`)}
      </ProjectName>
      <Text>{t(`home.projects_section.projects.${name}.description`)}</Text>
      <Link to={`/projects/${name}`}>
        <Button>{t(`home.projects_section.link`)}</Button>
      </Link>
    </Card>
  );
}
