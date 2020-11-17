import React from "react";
import styled from "styled-components/macro";
import Link from "../link";
import useTranslation from "../../hooks/useTranslation";
import mixins from "../../theme/mixins";

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
          <Link>Server repo</Link>
        </a>
      )}
      {clientRepo && (
        <a href={clientRepo} target="_blank" rel="noreferrer">
          <Link>Client repo</Link>
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noreferrer">
          <Link isPrimaryColor={true}>{t(`project_page.website`)}</Link>
        </a>
      )}
    </StyledLinks>
  );
}
