import React from "react";
import styled, { css } from "styled-components/macro";

const Wrapper = styled.div``;

const Title = styled.h3`
  ${(props) => css`
    color: ${props.theme.headings};
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  `}
`;
const UList = styled.ul`
  list-style-type: none;
  margin-left: 1.5rem;
`;

const ListItem = styled.li`
  ${(props) => css`
    color: ${props.theme.text};
    margin: 1.5rem 0;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      top: 5px;
      left: -1.5rem;
      border: 1px solid ${props.theme.headings};
      border-radius: 50%;
    }
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
