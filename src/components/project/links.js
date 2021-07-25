import React from 'react';
import styled from 'styled-components/macro';
import TextLink from '../link';
import useTranslation from '../../hooks/useTranslation';
import mixins from '../../theme/mixins';

const { flexRow } = mixins;

const StyledLinks = styled.div`
  ${flexRow};
  gap: 1rem;
`;

export default function Links({
  live = null,
  serverRepo = null,
  clientRepo = null,
}) {
  const { t } = useTranslation();
  return (
    <StyledLinks>
      {serverRepo && (
        <a href={serverRepo} target="_blank" rel="noreferrer">
          <TextLink>Server repo</TextLink>
        </a>
      )}
      {clientRepo && (
        <a href={clientRepo} target="_blank" rel="noreferrer">
          <TextLink>Client repo</TextLink>
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noreferrer">
          <TextLink isPrimaryColor>{t('project_page.website')}</TextLink>
        </a>
      )}
    </StyledLinks>
  );
}
