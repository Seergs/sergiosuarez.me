import React from "react";
import Subtitle from "../subtitle";
import Text from "../text";
import styled, { css } from "styled-components/macro";
import useTranslation from "../../hooks/useTranslation";

const StyledMotivation = styled.section``;

export default function Motivation({ text }) {
  const { t } = useTranslation();
  return (
    <StyledMotivation>
      <Subtitle>{t("project_page.motivation_title")}</Subtitle>
      <Text>{text}</Text>
    </StyledMotivation>
  );
}
