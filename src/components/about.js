import React from 'react';
import styled from 'styled-components/macro';
import Subtitle from './subtitle';
import Text from './text';
import Button from './button';
import useTranslation from '../hooks/useTranslation';

const Wrapper = styled.div`
  margin-bottom: 4rem;
  ${Text}:nth-of-type(2) {
    margin: 1rem 0 2rem 0;
  }
`;

export default function About({ resumeLink }) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subtitle>{t('home.about.subtitle')}</Subtitle>
      <Text>{t('home.about.text.1')}</Text>
      <Text>{t('home.about.text.2')}</Text>
      <Button href={resumeLink} download="Sergio Suárez">
        {t('home.about.resume')}
      </Button>
    </Wrapper>
  );
}
