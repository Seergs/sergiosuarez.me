import React from 'react';
import styled from 'styled-components/macro';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import Text from './text';
import TextLink from './link';
import useTranslation from '../hooks/useTranslation';
import { createLink } from '../utils/create-link';
import { mediaQueries } from '../theme/breakpoints';

const ImageContainer = styled(Link)`
  border-radius: 5px;
  align-items: center;
  display: flex;

  transition: transform 0.3s ease-in-out;
  .gatsby-image-wrapper {
    width: 100%;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const Card = styled.li`
  &:nth-child(1) {
    grid-column: 1 / 5;
    text-align: center;
    ${ImageContainer} {
      background-color: var(--color-projectCard1);
    }

    ${Text} {
      margin: 0 auto 1rem auto;

      ${mediaQueries('md')`
      margin-bottom: .5rem;
    `}
    }
  }
  &:nth-child(2) {
    grid-column: 1 / 3;
    ${ImageContainer} {
      height: 350px;
      background-color: var(--color-projectCard2);

      ${mediaQueries('xl')`
        height:auto;
      `}
    }

    ${mediaQueries('xl')`
      grid-column: 1 / 5;
    `}
  }
  &:nth-child(3) {
    grid-column: 3 / 5;
    ${ImageContainer} {
      height: 350px;
      background-color: var(--color-projectCard3);

      ${mediaQueries('xl')`
        height:auto;
      `}
    }
    ${mediaQueries('xl')`
      grid-column: 1 / 5;
    `}
  }
  &:nth-child(4) {
    grid-column: 2 / 4;
    ${ImageContainer} {
      background-color: var(--color-projectCard4);
    }
    ${mediaQueries('xl')`
      grid-column: 1 / 5;
    `}
  }
  ${Text} {
    margin-bottom: 1rem;

    ${mediaQueries('md')`
      margin-bottom: .5rem;
    `}
  }
`;

const ProjectName = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-headings);

  ${mediaQueries('md')`
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  `}
`;

export default function ProjectCard({ name, image }) {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const link = createLink({ pathname, to: `projects/${name}` });

  return (
    <Card>
      <ImageContainer to={link}>
        <Image fluid={image.src} alt={image.alt} />
      </ImageContainer>
      <ProjectName to={link}>
        {t(`home.projects_section.projects.${name}.name`)}
      </ProjectName>
      <Text>{t(`home.projects_section.projects.${name}.description`)}</Text>
      <Link to={link}>
        <TextLink>{t('home.projects_section.link')}</TextLink>
      </Link>
    </Card>
  );
}
