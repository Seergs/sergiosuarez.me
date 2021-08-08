import React from 'react';
import styled from 'styled-components/macro';
import Subtitle from './subtitle';
import useTranslation from '../hooks/useTranslation';
import TimelineItem from './timeline-item';

const Container = styled.div`
    margin-bottom: 4rem;
`;

const StyledTimelineItem = styled.div`
    margin: 1em 0;
`;

const TimelineItemCompany = styled.p`
    color: var(--color-headings);
`;

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Subtitle>{t('home.experience_section.title')}</Subtitle>
      <TimelineCompanyItem company="IBM">
        <TimelineItem id="ibm.2" />
        <TimelineItem id="ibm.1" />
      </TimelineCompanyItem>
      <TimelineCompanyItem company="Cisco">
        <TimelineItem id="cisco" />
      </TimelineCompanyItem>
    </Container>
  );
};

const TimelineCompanyItem = ({ company, children }) => (
  <StyledTimelineItem>
    <TimelineItemCompany>{company}</TimelineItemCompany>
    {children}
  </StyledTimelineItem>
);

export default Timeline;
