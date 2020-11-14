import React from "react";
import useTranslation from "../hooks/useTranslation";
import Subtitle from "./subtitle";
import Text from "./text";
import Button from "./button";
import styled, { css } from "styled-components/macro";
import ContactForm from "./contact-form";

const Wrapper = styled.section`
  margin-top: 6rem;

  ${Button} {
    margin: 2rem 0;
  }
`;

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subtitle>{t("home.contact.title")}</Subtitle>
      <Text>{t("home.contact.message_1")}</Text>
      <Button href="mailto:s.suarerez@gmail.com">s.suarerez@gmail.com</Button>
      <Text>{t("home.contact.message_2")}</Text>
      <ContactForm />
    </Wrapper>
  );
}
