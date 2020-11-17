import React from "react";
import Subtitle from "./subtitle";
import styled from "styled-components/macro";
import useTranslation from "../hooks/useTranslation";
import ProjectCard from "./project-card";

const Wrapper = styled.div``;

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 6rem;
  list-style-type: none;
`;

export default function Projects({ images }) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subtitle>{t("home.projects_section.title")}</Subtitle>
      <Container>
        <ProjectCard
          name={"mim"}
          image={images.find((i) => i.originalName.includes("mim"))}
        />
        <ProjectCard
          name={"chatify"}
          image={images.find((i) => i.originalName.includes("chatify"))}
        />
        <ProjectCard
          name={"hpwiki"}
          image={images.find((i) => i.originalName.includes("hp"))}
        />
        <ProjectCard
          name={"azahares-leslie"}
          image={images.find((i) => i.originalName.includes("azahares"))}
        />
      </Container>
    </Wrapper>
  );
}
