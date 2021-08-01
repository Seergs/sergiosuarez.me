import React from 'react';
import styled from 'styled-components/macro';
import Subtitle from '../subtitle';
import Text from '../text';
import useTranslation from '../../hooks/useTranslation';
import mixins from '../../theme/mixins';
import { mediaQueries } from '../../theme/breakpoints';

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
  color: var(--color-headings);
`;

const Row = styled.div`
  ${flexRow};
  ${alignCenter};
  svg {
    margin-right: 4rem;
    height: 40px;
    width: 40px;

    ${mediaQueries('md')`
    display:none;
    `}
  }
`;

const IconWrapper = styled.div`
  ${flexRow};
  ${alignCenter};
`;

export default function StackExplanation({ stack }) {
  const { t } = useTranslation();

  return (
    <StyledExplanation>
      <Subtitle>{t('project_page.stack_explanation_title')}</Subtitle>
      <List>
        {stack.map((tech) => (
          <ListItem key={tech.name}>
            <TechName>{tech.name}</TechName>
            <Row>
              <IconWrapper>
                <tech.Icon />
              </IconWrapper>
              <Text>{t(tech.textId)}</Text>
            </Row>
          </ListItem>
        ))}
      </List>
    </StyledExplanation>
  );
}
