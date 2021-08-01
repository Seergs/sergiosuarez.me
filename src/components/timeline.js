import React from 'react';
import styled from 'styled-components/macro';
import Subtitle from './subtitle';
import useTranslation from '../hooks/useTranslation';
import Text from './text';

const Container = styled.div`
    margin-bottom: 4rem;
`;

const StyledTimelineItem = styled.div`
    margin: 1em 0;
`;

const TimelineItemCompany = styled.p`
    color: var(--color-headings);
`;

const TimelineItemPositionWrapper = styled.div`
    position: relative;
    margin-left: 1rem;
`;

const TimelineItemPosition = styled.div`
    margin-left: 10px;
    margin-bottom: .6em;
    pointer-events: none;
    ::before {
        position: absolute;
        content: '●';
        color: var(--color-headings);
        top: 0;
        left: -12px;
        right: 0; 
        bottom: 0;
    }
    ::after {
        position: absolute;
        background: var(--color-primary);
        width: 2px;
        content: '';
        color: var(--color-headings);
        top: 25px;
        left: -8px;
        right: 0; 
        bottom: 0;
    }
`;

const TimelineItemDate = styled.small`
    color: var(--color-text);
    font-size: 0.8rem;
`;

const TimelineItemRole = styled.p`
    color: var(--color-headings);
    font-size: .9rem;
    font-weight: bold;
`;

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Subtitle>{t('home.experience_section.title')}</Subtitle>
      <TimelineItem company="Cisco">
        <TimelineItemPositionWrapper>
          <TimelineItemPosition>
            <TimelineItemRole>{t('home.experience_section.cisco.role')}</TimelineItemRole>
            <TimelineItemDate>{t('home.experience_section.cisco.date_period')}</TimelineItemDate>
            <Text>{t('home.experience_section.cisco.description')}</Text>
          </TimelineItemPosition>
        </TimelineItemPositionWrapper>
      </TimelineItem>
      <TimelineItem company="IBM">
        <TimelineItemPositionWrapper>
          <TimelineItemPosition>
            <TimelineItemRole>{t('home.experience_section.ibm.1.role')}</TimelineItemRole>
            <TimelineItemDate>{t('home.experience_section.ibm.1.date_period')}</TimelineItemDate>
            <Text>{t('home.experience_section.ibm.1.description')}</Text>
          </TimelineItemPosition>
        </TimelineItemPositionWrapper>
        <TimelineItemPositionWrapper>
          <TimelineItemPosition>
            <TimelineItemRole>{t('home.experience_section.ibm.2.role')}</TimelineItemRole>
            <TimelineItemDate>{t('home.experience_section.ibm.2.date_period')}</TimelineItemDate>
            <Text>{t('home.experience_section.ibm.2.description')}</Text>
          </TimelineItemPosition>
        </TimelineItemPositionWrapper>
      </TimelineItem>
    </Container>

  );
};

const TimelineItem = ({ company, children }) => (
  <StyledTimelineItem>
    <TimelineItemCompany>{company}</TimelineItemCompany>
    {children}
  </StyledTimelineItem>
);

export default Timeline;
