import React from 'react';
import styled from 'styled-components/macro';
import Text from '../text';

const StyledFeatures = styled.ul`
  margin-left: 1.5rem;
  margin-top: 2rem;
  list-style-type: none;
`;

const ListItem = styled.li`
  position: relative;
  margin: 1rem 0;

  &::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    top: 10px;
    left: -1.5rem;
    border: 1px solid var(--color-text);
    border-radius: 50%;
  }
`;

export default function Features({ features }) {
  return (
    <StyledFeatures>
      {features.map((feature) => (
        <ListItem key={`feature-${feature}`}>
          <Text>{feature}</Text>
        </ListItem>
      ))}
    </StyledFeatures>
  );
}
