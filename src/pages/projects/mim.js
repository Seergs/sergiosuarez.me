import React from "react";
import { Layout, Title, Link as Button, Text } from "../../components";
import { Link } from "gatsby";
import styled, { css } from "styled-components/macro";
import useTranslation from "../../hooks/useTranslation";

const StyledMIM = styled.div`
  ${Title} {
    margin-bottom: 2rem;
  }
`;

export default function MIM() {
  const { t } = useTranslation();

  return (
    <Layout>
      <StyledMIM>
        <Title>Master Incident Manager</Title>
        <div>
          <Text>{t("mim.description")}</Text>
          <a
            href="https://master-incident-management.netlify.app/"
            rel="noopener"
          >
            <Button>{t("mim.website")}</Button>
          </a>
        </div>
      </StyledMIM>
    </Layout>
  );
}
