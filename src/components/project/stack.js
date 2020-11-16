import React from "react";
import styled, { css } from "styled-components/macro";
import useTranslation from "../../hooks/useTranslation";
import Subtitle from "../subtitle";

const Wrapper = styled.div``;

const List = styled.ul`
  columns: 2;
  list-style-type: none;
  margin-left: 1.5rem;
`;

const ListItem = styled.li`
  ${(props) => css`
    position: relative;
    color: ${props.theme.headings};
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
      background-color: ${props.theme.headings};
      border-radius: 50%;
    }
  `}
`;

export default function Stack({ stack }) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subtitle>{t("project_page.stack_title")}</Subtitle>
      <List>
        {stack.map((tech) => (
          <ListItem key={tech}>{tech}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
