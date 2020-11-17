import React from "react";
import Subtitle from "./subtitle";
import styled from "styled-components/macro";
import useTranslation from "../hooks/useTranslation";
import ProjectCard from "./project-card";
import generateAltTexts from "../utils/generateAltTexts";

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
  const altTexts = generateAltTexts(images);
  return (
    <Wrapper>
      <Subtitle>{t("home.projects_section.title")}</Subtitle>
      <Container>
        <ProjectCard
          name={"mim"}
          image={{
            src: images.find((i) => i.originalName.includes("mim")),
            alt: altTexts["mim"],
          }}
        />
        <ProjectCard
          name={"chatify"}
          image={{
            src: images.find((i) => i.originalName.includes("chatify")),
            alt: altTexts["chatify"],
          }}
        />
        <ProjectCard
          name={"hpwiki"}
          image={{
            src: images.find((i) => i.originalName.includes("hp")),
            alt: altTexts["hp"],
          }}
        />
        <ProjectCard
          name={"azahares-leslie"}
          image={{
            src: images.find((i) => i.originalName.includes("azahares")),
            alt: altTexts["azahares"],
          }}
        />
      </Container>
    </Wrapper>
  );
}
