import React from 'react';
import styled from 'styled-components/macro';
import { mediaQueries } from '../theme/breakpoints.ts';

const Wrapper = styled.div``;

const Title = styled.h3`
  color: var(--color-headings);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;
const UList = styled.ul`
  list-style-type: none;
  margin-left: 1.5rem;
`;

const ListItem = styled.li`
  color: var(--color-text);
  margin: 1.5rem 0;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    top: 7px;
    left: -1.5rem;
    border: 1px solid var(--color-headings);
    border-radius: 50%;
  }

  ${mediaQueries('lg')`
    margin: .8rem 0;
  `}
`;

export default function List({ title, items }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <UList>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </UList>
    </Wrapper>
  );
}
