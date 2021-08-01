import React from 'react';
import styled from 'styled-components/macro';
import Text from './text';
import useTranslation from '../hooks/useTranslation';

const TimelineItemPositionWrapper = styled.div`
    position: relative;
    margin-left: 1rem;
`;

const TimelineItemPosition = styled.div`
    margin-left: 10px;
    margin-bottom: .6em;
    ::before {
        position: absolute;
        pointer-events: none;
        content: '●';
        color: var(--color-headings);
        top: 0;
        left: -12px;
        right: 0; 
        bottom: 0;
    }
    ::after {
        position: absolute;
        pointer-events: none;
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

const Button = styled.button`
    background-color: transparent;
    color: var(--color-primary);
    border: 0;
    font-size: 1rem;
    cursor: pointer;
`;

const TimelineItem = ({ id }) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = React.useState(false);

  return (
    <TimelineItemPositionWrapper>
      <TimelineItemPosition>
        <TimelineItemRole>{t(`home.experience_section.${id}.role`)}</TimelineItemRole>
        <TimelineItemDate>{t(`home.experience_section.${id}.date_period`)}</TimelineItemDate>
        <Text>
          { showMore
            ? (
              <>
                { t(`home.experience_section.${id}.description`) }
                {' '}
                <Button type="button" onClick={() => setShowMore(false)}> Read less</Button>
              </>
            )
            : (
              <>
                { t(`home.experience_section.${id}.description_short`) }
                {' '}
                <Button type="button" onClick={() => setShowMore(true)}>Read more</Button>
              </>
            )}
        </Text>
      </TimelineItemPosition>
    </TimelineItemPositionWrapper>
  );
};

export default TimelineItem;
