import React from "react";
import styled from "styled-components/macro";
import Text from "../text";
import Subtitle from "../subtitle";
import useTranslation from "../../hooks/useTranslation";

const StyledSolution = styled.section``;

export default function Solution({ project }) {
  const { t } = useTranslation();

  return (
    <StyledSolution>
      <Subtitle>{t("project_page.solution_title")}</Subtitle>
      <Text>{t(`project_page.${project}.solution.text`)}</Text>
    </StyledSolution>
  );
}
