import React from "react";
import styled from "styled-components/macro";
import Text from "../text";
import useTranslation from "../../hooks/useTranslation";

const StyledDescription = styled.section``;
export default function Description({ children, projectName }) {
  const { t } = useTranslation();
  return (
    <StyledDescription>
      <Text>{t(`project_page.${projectName}.description`)}</Text>
      {children}
    </StyledDescription>
  );
}
