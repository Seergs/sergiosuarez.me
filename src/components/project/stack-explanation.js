import React from "react";
import styled, { css } from "styled-components/macro";
import Subtitle from "../subtitle";
import Text from "../text";
import useTranslation from "../../hooks/useTranslation";
import mixins from "../../theme/mixins";

const { flexRow, alignCenter } = mixins;

const StyledExplanation = styled.section``;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin: 4rem 0;
`;

const TechName = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  ${flexRow};
  ${alignCenter};
  gap: 5rem;
  svg {
    width: 40px;
    height: 40px;
  }
`;

export default function StackExplanation({ stack }) {
  const { t } = useTranslation();

  return (
    <StyledExplanation>
      <Subtitle>{t("project_page.stack_explanation_title")}</Subtitle>
      <List>
        {stack.map((tech) => {
          return (
            <ListItem key={tech.name}>
              <TechName>{tech.name}</TechName>
              <Row>
                <tech.Icon />
                <Text>{t(tech.textId)}</Text>
              </Row>
            </ListItem>
          );
        })}
      </List>
    </StyledExplanation>
  );
}
