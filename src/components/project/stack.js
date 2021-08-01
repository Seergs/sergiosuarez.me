import React from 'react';
import styled from 'styled-components/macro';
import useTranslation from '../../hooks/useTranslation';
import Subtitle from '../subtitle';
import { mediaQueries } from '../../theme/breakpoints';

const Wrapper = styled.div`
  ${mediaQueries('xl')`
    margin-top: 4rem;
  `}
`;

const List = styled.ul`
  columns: 2;
  list-style-type: none;
  margin-left: 1.5rem;

  ${mediaQueries('xl')`
    max-width: 400px;
  `}
`;

const ListItem = styled.li`
  position: relative;
  color: var(--color-headings);
  &:not(:first-child) {
    margin: 0.5rem 0;
  }
  &:before {
    position: absolute;
    content: "";
    left: -1.5rem;
    top: 6px;
    width: 8px;
    height: 8px;
    background-color: var(--color-headings);
    border-radius: 50%;
  }
`;

export default function Stack({ stack }) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subtitle>{t('project_page.stack_title')}</Subtitle>
      <List>
        {stack.map((tech) => (
          <ListItem key={tech}>{tech}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
