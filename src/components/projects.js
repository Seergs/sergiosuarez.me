import React from "react";
import Subtitle from "./subtitle";
import styled, { css } from "styled-components/macro";
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
          image={images.find((i) => i.originalName === "mim-home.png")}
        />
        <ProjectCard
          name={"chatify"}
          image={images.find((i) => i.originalName === "chatify-home.png")}
        />
        <ProjectCard
          name={"hpwiki"}
          image={images.find((i) => i.originalName === "hp-home.png")}
        />
        <ProjectCard
          name={"azahares-leslie"}
          image={images.find((i) => i.originalName === "azahares-home.png")}
        />
      </Container>
    </Wrapper>
  );
}

const colors = {
  mim: "#F9FBFB",
  chatify: "#FDFFF4",
  hp: "#F1F2FA",
  azahares: "#F9FBFB",
};
