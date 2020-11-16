import React from "react";
import styled, { css } from "styled-components/macro";
import Text from "../../text";
import Button from "../../link";
import useTranslation from "../../../hooks/useTranslation";

const StyledDescription = styled.section``;
export default function Description() {
  const { t } = useTranslation();
  return (
    <StyledDescription>
      <Text>{t("project_page.mim.description")}</Text>
      <a
        href="https://master-incident-management.netlify.app/"
        target="_blank"
        rel="noopener"
      >
        <Button isPrimaryColor={true}>{t("project_page.mim.website")}</Button>
      </a>
    </StyledDescription>
  );
}
